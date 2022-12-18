import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
