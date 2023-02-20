import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import movieReducer from "../slice/Movie";


const reducer = combineReducers( {
	movie: movieReducer,
})
const makeStore = () => configureStore({
  reducer: {reducer},
  devTools: true,
});

export const wrapper = createWrapper(makeStore);