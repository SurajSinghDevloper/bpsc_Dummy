
import { verifyOtp  } from "../Constants/Otp";

const initialState = {
  error: null,
  message: "",
  loading: false,
};
const VerifyOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case verifyOtp.OTP_VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case verifyOtp.OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case verifyOtp.OTP_VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default VerifyOTPReducer;