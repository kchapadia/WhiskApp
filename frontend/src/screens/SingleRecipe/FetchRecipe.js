import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { createRecipeAction } from "../../actions/recipesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { postFetchLinkData } from "../../actions/recipesActions";

function FetchRecipe({ history }) {
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const recipeCreate = useSelector((state) => state.recipeCreate);
  const { loading, error, recipe } = recipeCreate;

  console.log(recipe);

  const resetHandler = () => {
    setLink("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postFetchLinkData(link));
    if (!link) return;

    resetHandler();
    history.push("/myrecipes");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Fetch a Recipe">
      <Card>
        <Card.Header>Fetch a new Recipe</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="link">
              <Form.Label>Recipe Link</Form.Label>
              <Form.Control
                type="link"
                value={link}
                placeholder="Enter the Link"
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Fetch Recipe
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Fields
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Fetching on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default FetchRecipe;
