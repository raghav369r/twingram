import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    removeUser: (store) => {
      store.user = null;
    },
    setUser: (store, att) => {
      store.user = att.payload;
    },
  },
});

export default userSlice.reducer;
export const { removeUser, setUser } = userSlice.actions;
