import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

function initialValue() {
  const user = localStorage.getItem("@SpotifyUser");
  if (user) {
    return JSON.parse(user);
  }

  return {};
}

export const userSlice = createSlice({
  name: "User",
  initialState: {
    value: initialValue(),
  },
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = {};
    },
    extendUser: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { saveUser, clearUser, extendUser } = userSlice.actions;

export default userSlice.reducer;

export const useUser = () => {
  const userState = useSelector((state: any) => state.user.value);
  const dispatch = useDispatch();

  return { userState, dispatch };
};
