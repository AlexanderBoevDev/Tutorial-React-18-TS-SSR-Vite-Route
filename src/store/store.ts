import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/FilterSlice";
import posts from "./slice/PostsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		filter,
		posts
	},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
