import { userConstant } from "../Constants/UserConstant";

const initialState = {
  // ... other initial state properties ...
  user: null,
  updatingProfile: false,
  updateProfileError: null,
};

const updateUserImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.UPDATE_PROFILE_IMG_REQUEST:
      return {
        ...state,
        updatingProfile: true,
        updateProfileError: null,
      };
    case userConstant.UPDATE_PROFILE_IMG_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        updatingProfile: false,
        updateProfileError: null,
      };
    case userConstant.UPDATE_PROFILE_IMG_FAILURE:
      return {
        ...state,
        updatingProfile: false,
        updateProfileError: action.payload.error,
      };
    // ... other cases ...
    default:
      return state;
  }
};

export default updateUserImgReducer;