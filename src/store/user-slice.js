import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  idToken: "",
  email: "",
  name: "",
  isLoggin: false,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {
    login(state, action) {
      const indexOfAtSymbol = action.payload.email.indexOf("@");
      const nameUser = action.payload.email.slice(0, indexOfAtSymbol);
      const nameUserUpperFirstCharacter =
        nameUser[0].toUpperCase() + nameUser.slice(1);
      state.name = nameUserUpperFirstCharacter;
      state.idToken = action.payload.idToken;
      state.isLoggin = Boolean(state.idToken);
      state.email = action.payload.email;
    },
    logout(state) {
      return initialUser;
    },
  },
});
// const storeInLocal=()=>{
//     return (dispatch)=>{

//     }
// }
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
