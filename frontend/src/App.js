import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyRecipes from "./screens/MyRecipes/MyRecipes";
import SingleRecipe from "./screens/SingleRecipe/SingleRecipe";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateRecipe from "./screens/SingleRecipe/CreateRecipe";
import FetchRecipe from "./screens/SingleRecipe/FetchRecipe";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import VerificationScreen from "./screens/VerificationScreen/VerificationScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/verification" component={VerificationScreen} />
        <Route
          path="/myrecipes"
          component={({ history }) => (
            <MyRecipes search={search} history={history} />
          )}
        />
        <Route path="/recipe/:id" component={SingleRecipe} />
        <Route path="/createrecipe" component={CreateRecipe} />;
        <Route path="/fetchrecipe" component={FetchRecipe} />;
        <Route path="/profile" component={ProfileScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
