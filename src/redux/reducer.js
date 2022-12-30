import { createSlice } from "@reduxjs/toolkit";
import { FreelancerApi } from "../api";

const user= JSON.parse(localStorage.getItem("user"));

const initialState = {
  value: user,
};

export const userManageSlice = createSlice({
  name: "userManage",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      localStorage.setItem("user",JSON.stringify(user));
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = {};
    },
    setUser: (state, action) => {
        // const user = await FreelancerApi.getFreelancerById(action.payload);
        state.value = action.payload;
    }
  },
});

export const getUser  = (data) => async(dispatch) =>{
    const user = await FreelancerApi.getFreelancerById(data);
    dispatch(setUser(user));
}

// Action creators are generated for each case reducer function
export const { addUser, setUser } = userManageSlice.actions;

export default userManageSlice.reducer;