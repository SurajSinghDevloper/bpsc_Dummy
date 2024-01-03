import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import userUpdate from "./UpdateUserReducer";
import updateUserImg from "./UpdateProfileImgReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  updateUser: userUpdate,
  updateUserImg: updateUserImg,

});

export default rootReducer;