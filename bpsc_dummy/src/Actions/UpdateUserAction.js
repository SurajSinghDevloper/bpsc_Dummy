import { userConstant } from "../Constants/UserConstant";
import { getCookie } from "../Configuration/Cookies";
import RouteTo from "../Hoc/RouteTo";

export const updateUserProfile = (profileData) => {
    return async (dispatch, getState) => {
        dispatch({ type: userConstant.UPDATE_PROFILE_REQUEST });
        const formData = new FormData();
        formData.append("name", profileData.name);
        formData.append("bio", profileData.bio);
        formData.append("email", profileData.email);
        formData.append("address", profileData.address);
        formData.append("mobile", profileData.mobile);
        formData.append("gender", profileData.gender);
        formData.append("securityQuestion", profileData.securityQuestion);
        formData.append("securityAnswer", profileData.securityAnswer);
        formData.append("imageFile", profileData.profileImg);

        const tokenN = getCookie("token");
        console.log("token from update User  =====   ", tokenN);

        const Authorization = {
            Authorization: getCookie("token"),
        };

        try {
            // Assuming you have an API endpoint for updating user profile
            const res = await RouteTo.post("/user/updateUser", formData, {
                headers: Authorization,
            });

            if (res.status === 200) {
                const updatedUser = res.data.user;

                // Update user data in Redux store
                dispatch({
                    type: userConstant.UPDATE_PROFILE_SUCCESS,
                    payload: { user: updatedUser },
                });
                // Update user data in local storage

                localStorage.setItem("user", JSON.stringify(profileData));
                console.log(profileData);
            } else {
                dispatch({
                    type: userConstant.UPDATE_PROFILE_FAILURE,
                    payload: { error: "Failed to update profile, please try again." },
                });
            }
        } catch (error) {
            console.error("Error:", error);
            dispatch({
                type: userConstant.UPDATE_PROFILE_FAILURE,
                payload: { error: "An error occurred while updating profile." },
            });
        }
    };
};