import { combineReducers } from "redux";
import login from "./Login";
import registration from "./Registration";
import userUpdate from "./UpdateUserReducer";
import updateUserImg from "./UpdateProfileImgReducer";


const rootReducer = combineReducers({
  auth: login,
  user: registration,
  updateUser: userUpdate,
  updateUserImg: updateUserImg,

});

export default rootReducer;