import { configureStore } from '@reduxjs/toolkit'
import filter from './slice/FilterSlice'

export const store = configureStore({
	reducer: {
		filter,
	},
})
