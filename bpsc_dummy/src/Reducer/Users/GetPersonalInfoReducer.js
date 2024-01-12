import { userConstant } from '../../Constants/UserConstant';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};

const getPersonalInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstant.GET_PROFILE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case userConstant.GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfile: action.payload.userProfile,
        error: null,
      };

    case userConstant.GET_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        userProfile: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default getPersonalInfoReducer;
