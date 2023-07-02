import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from './slice/FilterSlice'

export const store = configureStore({
	reducer: {
		FilterSlice,
	},
})
