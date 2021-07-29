import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
<<<<<<< Updated upstream
=======
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_VERIFY_FAIL,
  USER_EMAIL_REQUEST,
  USER_EMAIL_SUCCESS,
  USER_EMAIL_FAIL,
  USER_RESET_REQUEST,
  USER_RESET_SUCCESS,
  USER_RESET_FAIL
>>>>>>> Stashed changes
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, pic, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/users/profile", user, config);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
<<<<<<< Updated upstream
=======

export const verify = (temporarytoken) => async (dispatch) => {
  try {
    dispatch({ type: USER_VERIFY_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/users/verify/${temporarytoken}`,
      config
    );

    dispatch({ type: USER_VERIFY_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_VERIFY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetEmailP = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_EMAIL_REQUEST });

    const config = {
      headers: {
        "Content-type" : "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/sendForgotEmail`,
      { email },
      config
    );
    
    dispatch ({ type: USER_EMAIL_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_EMAIL_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const reset = (temporarytoken, newpassword, confirmpassword) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESET_REQUEST });

    const config = {
      headers: {
        "Content-type" : "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/users/forgotPassword/${temporarytoken}`,
      {newpassword, confirmpassword},
      config
    );
    
    dispatch ({ type: USER_RESET_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_RESET_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

>>>>>>> Stashed changes
