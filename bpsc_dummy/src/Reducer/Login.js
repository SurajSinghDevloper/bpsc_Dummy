import { authConstant } from "../Constants/AuthConstant";

const initialState = {
  token: null,
  user: {
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    password: "",
    age:"",
    dob:""
  },
  authenticate: false,
  authenticating: false,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case authConstant.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticating: false,
        authenticate: true,
      };
    case authConstant.LOGOUT_REQUEST:
      return initialState;
    default:
      
      return state;
  }
};

export default reducer;