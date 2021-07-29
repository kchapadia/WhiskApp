import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  recipeCreateReducer,
  recipeDeleteReducer,
  recipeListReducer,
  recipeUpdateReducer,
} from "./reducers/recipesReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
<<<<<<< Updated upstream
=======
  userVerifyReducer,
  userResetReducer,
>>>>>>> Stashed changes
} from "./reducers/userReducers";

const reducer = combineReducers({
  recipeList: recipeListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  recipeCreate: recipeCreateReducer,
  recipeDelete: recipeDeleteReducer,
  recipeUpdate: recipeUpdateReducer,
  userUpdate: userUpdateReducer,
<<<<<<< Updated upstream
=======
  userVerify: userVerifyReducer,
  userReset: userResetReducer,
>>>>>>> Stashed changes
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
