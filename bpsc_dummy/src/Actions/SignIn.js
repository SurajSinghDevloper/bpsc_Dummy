import RouteTo from "../Hoc/RouteTo";
import { authConstant } from "../Constants/AuthConstant";
import {
  clearCookie,
  getCookie,
  setCookie,
  setUserCookie,
} from "../Configuration/Cookies";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.LOGIN_REQUEST });

    try {
      const res = await RouteTo.post(`/api/v1/auth/login`, { ...user });
      if (res.status === 200) {
        const { token, userDetails } = res.data;
        const userJson = userDetails;
        localStorage.setItem("user", JSON.stringify(userJson));

        setCookie("token", "Bearer " + token, 1);
        setUserCookie("userDetails", userDetails, 1);
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: { token, userDetails },
        });
      } else {
        dispatch({
          type: authConstant.LOGIN_FAILURE,
          payload: { error: "Failed to log in Server, please try again." },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: { error: "An error occurred while logging in." },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return (dispatch) => {
    const token = getCookie("token"); // Use the correct cookie name

    const userJSON = localStorage.getItem("user");

    if (token && userJSON) {
      try {
        const user = JSON.parse(userJSON);
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: { token: token, user: user },
        });
      } catch (error) {
        console.error("Error parsing user JSON:", error);
        dispatch({
          type: authConstant.LOGIN_FAILURE,
          payload: { error: "Error parsing user data." },
        });
      }
    } else {
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: { error: "User is not logged in." },
      });
    }
  };
};

export const signout = () => {
  return (dispatch) => {
    localStorage.clear();
    clearCookie("token");
    dispatch({
      type: authConstant.LOGOUT_REQUEST,
    });
  };
};