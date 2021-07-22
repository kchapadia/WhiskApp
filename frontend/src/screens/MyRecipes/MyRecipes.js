import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeAction, listRecipes } from "../../actions/recipesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function MyRecipes({ history, search }) {
  const dispatch = useDispatch();

  const recipeList = useSelector((state) => state.recipeList);
  const { loading, error, recipes } = recipeList;

  // const filteredRecipes = recipes.filter((recipe) =>
  //   recipe.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const recipeDelete = useSelector((state) => state.recipeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = recipeDelete;

  const recipeCreate = useSelector((state) => state.recipeCreate);
  const { success: successCreate } = recipeCreate;

  const recipeUpdate = useSelector((state) => state.recipeUpdate);
  const { success: successUpdate } = recipeUpdate;

  useEffect(() => {
    dispatch(listRecipes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteRecipeAction(id));
    }
  };

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}!`}>
      {console.log(recipes)}
      <Link to="/createrecipe">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Recipe
        </Button>
      </Link>
      <Link to="/fetchrecipe">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Fetch new Recipe
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {recipes &&
        recipes
          .filter((filteredRecipe) =>
            filteredRecipe.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((recipe) => (
            <Accordion>
              <Card style={{ margin: 10 }} key={recipe._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(recipe)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {recipe.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/recipe/${recipe._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(recipe._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {recipe.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{recipe.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {recipe.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </MainScreen>
  );
}

export default MyRecipes;
