import { userConstant } from "../../Constants/UserConstant";
import { getCookie } from "../../Configuration/Cookies";
import RouteTo from "../../Hoc/RouteTo";

export const personalInfoAction = (profileInfo) => {
    return async (dispatch, getState) => {
        dispatch({ type: userConstant.UPDATE_PROFILE_REQUEST });
        const formData = new FormData();
        formData.append("firstname", profileInfo.firstname);
        formData.append("middlename", profileInfo.middlename);
        formData.append("lastname", profileInfo.lastname);
        formData.append("fname", profileInfo.father);
        formData.append("mname", profileInfo.mother);
        formData.append("gender", profileInfo.gender);
        formData.append("nationality", profileInfo.nationality);
        formData.append("maritialStatus", profileInfo.maritalStatus);
        formData.append("mobile", profileInfo.mobile);
        formData.append("aadharNo", profileInfo.aadharNo);
        formData.append("state", profileInfo.state);
        formData.append("district", profileInfo.district);
        formData.append("pincode", profileInfo.pincode);
        formData.append("cityOrVillage", profileInfo.city);
        formData.append("address", profileInfo.address);
        formData.append("religion", profileInfo.religion);
        formData.append("category", profileInfo.category);
        formData.append("domicile", profileInfo.stateOfDomicile);
        formData.append("disablity", profileInfo.isDisability);
        formData.append("disablityType", profileInfo.disabilityType);
        formData.append("disablityRemark", profileInfo.disabilityRemark);
        formData.append("identification", profileInfo.identificationMarks);
        formData.append("pLanguage", profileInfo.preferredLanguage);
        formData.append("locationType", profileInfo.belongTo);

        const Authorization = {
            Authorization: getCookie("token"),
        };

        try {
            // Assuming you have an API endpoint for updating user profile
            const res = await RouteTo.post("/api/v1/user/new-user/info", formData, {
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

                localStorage.setItem("user", JSON.stringify(formData));
                console.log(formData);
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