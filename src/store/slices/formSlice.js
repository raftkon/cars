import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: INITIAL_STATE,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
