import { sendOtp } from "../Constants/Otp";

const initialState = {
  error: null,
  message: "",
  loading: false,
};
const SendOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendOtp.OTP_SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case sendOtp.OTP_SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case sendOtp.OTP_SEND_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default SendOtpReducer;