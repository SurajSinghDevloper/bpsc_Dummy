import { combineReducers } from "redux";
import login from "./Login";
import registration from "./Registration";
import userUpdate from "./UpdateUserReducer";
import updateUserImg from "./UpdateProfileImgReducer";
import SendOtpReducer from "./SendOtpReducer";
import VerifyOTPReducer from "./verifyOTPReducer";
import personalInfoReducer from "./Users/PersonalInfoReducer";

const rootReducer = combineReducers({
  auth: login,
  user: registration,
  updateUser: userUpdate,
  updateUserImg: updateUserImg,
  SendOtpReducer: SendOtpReducer,
  VerifyOTPReducer: VerifyOTPReducer,
  personalInfoReducer: personalInfoReducer
});

export default rootReducer;