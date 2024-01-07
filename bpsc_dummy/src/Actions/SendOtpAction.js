import { sendOtp as OTP} from "../Constants/Otp";
import RouteTo from "../Hoc/RouteTo";

export const sendOtp = (email) => {
    console.log(email)
    return async (dispatch) => {
      dispatch({ type: OTP.OTP_SEND_REQUEST });
      try {
        const formData = new FormData();
        formData.append('email', email);
        const res = await RouteTo.post('/otp/send-otp', formData);
  
        if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: OTP.OTP_SEND_SUCCESS,
            payload: { message },
          });
         
        } else {
          if (res.status === 400) {
            dispatch({
              type: OTP.OTP_SEND_FAILURE,
              payload: {
                error: res.data.error,
              },
            });
          }
        }
      } catch (error) {
        console.log("Error:", error);
        dispatch({ type: OTP.OTP_SEND_FAILURE });
      }
    };
  };