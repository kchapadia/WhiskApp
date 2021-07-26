import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeAction, updateRecipeAction } from "../../actions/recipesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

function SingleRecipe({ match, history }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [instructions, setInstructions] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const recipeUpdate = useSelector((state) => state.recipeUpdate);
  const { loading, error } = recipeUpdate;

  const recipeDelete = useSelector((state) => state.recipeDelete);
  const { loading: loadingDelete, error: errorDelete } = recipeDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteRecipeAction(id));
    }
    history.push("/myrecipes");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/recipes/${match.params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setInstructions(data.instructions);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setInstructions("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateRecipeAction(match.params.id, title, content, instructions, category));
    if (!title || !content || !instructions || !category) return;

    resetHandler();
    history.push("/myrecipes");
  };

  return (
    <MainScreen title="Edit Recipe">
      <Card>
        <Card.Header>Edit your Recipe</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Ingredients Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}
            <Form.Group controlId="instructions">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the instructions"
                rows={4}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Instructions Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{instructions}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}
            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Recipe
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Recipe
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleRecipe;
