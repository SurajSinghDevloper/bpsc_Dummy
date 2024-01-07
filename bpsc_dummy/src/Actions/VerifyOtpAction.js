import { verifyOtp as OTP} from "../Constants/Otp";
import RouteTo from "../Hoc/RouteTo";

export const verifyOTP = (formData) => {

    return async (dispatch) => {
      dispatch({ type: OTP.OTP_VERIFY_REQUEST });
      try {
        const res = await RouteTo.post('/otp/verify-otp', formData);
  
        if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: OTP.OTP_VERIFY_SUCCESS,
            payload: { message },
          });
         
        } else {
          if (res.status === 400) {
            dispatch({
              type: OTP.OTP_VERIFY_FAILURE,
              payload: {
                error: res.data.error,
              },
            });
          }
        }
      } catch (error) {
        console.log("Error:", error);
        dispatch({ type: OTP.OTP_VERIFY_FAILURE });
      }
    };
  };