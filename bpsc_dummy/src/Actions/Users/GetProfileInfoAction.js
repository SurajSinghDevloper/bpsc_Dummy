// getUserProfileAction.js

import { userConstant  } from '../../Constants/UserConstant';
import { getCookie } from "../../Configuration/Cookies";
import RouteTo from "../../Hoc/RouteTo";

export const getUserProfileAction = (email) => {
  return async (dispatch) => {
    dispatch({ type: userConstant.GET_PROFILE_INFO_REQUEST });

    const Authorization = {
      Authorization: getCookie("token"), // Make sure you have the getCookie function defined
    };
    const base64Encoded = btoa(email);
    try {
      // Assuming you have an API endpoint for fetching user profile
      const res = await RouteTo.get(`/api/v1/user/${base64Encoded}`, {
        headers: Authorization,
      });

      if (res.status === 200) {
        const userProfile = res.data.profile;

        // Update user profile data in Redux store
        dispatch({
          type: userConstant.GET_PROFILE_INFO_SUCCESS,
          payload: { userProfile },
        });
      } else {
        dispatch({
          type: userConstant.GET_PROFILE_INFO_FAILURE,
          payload: { error: "Failed to fetch user profile, please try again." },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch({
        type: userConstant.GET_PROFILE_INFO_FAILURE,
        payload: { error: "An error occurred while fetching user profile." },
      });
    }
  };
};
