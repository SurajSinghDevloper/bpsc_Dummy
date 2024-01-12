import { userConstant } from '../../Constants/UserConstant';

const initialState = {
    userProfile: null,
    error: null,
    loading: false,
  };

const getPersonalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.GET_PROFILE_INFO_REQUEST:
          return {
            ...state,
            loading: true,
          };
    
        case userConstant.GET_PROFILE_INFO_SUCCESS:
          return {
            ...state,
            userProfile: action.payload.userProfile,
            loading: false,
            error: null,
          };
    
        case userConstant.GET_PROFILE_INFO_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
          };
    
        default:
          return state;
      }
};

export default getPersonalInfoReducer;
