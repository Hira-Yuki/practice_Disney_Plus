const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  dispalyName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.dispalyName = action.payload.dispalyName;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.dispalyName = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;