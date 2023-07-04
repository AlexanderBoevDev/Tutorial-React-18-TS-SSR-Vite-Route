import { configureStore } from '@reduxjs/toolkit'
import filter from './slice/FilterSlice'
import posts from './slice/PostsSlice'

export const store = configureStore({
	reducer: {
		filter,
		posts
	},
})
