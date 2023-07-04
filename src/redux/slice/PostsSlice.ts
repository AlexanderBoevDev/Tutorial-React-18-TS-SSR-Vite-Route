import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPosts = createAsyncThunk(
	'posts/fetchPostsItems', async (params) => {
		// @ts-ignore
		const { currentPage, filtersAuthor, sortBy, order, search } = params
		const { data, headers } = await axios.get(
			`http://localhost:4301/posts?_limit=8&_page=${currentPage}${filtersAuthor}&_sort=${sortBy}&_order=${order}${search}`)
		const itemsCount = headers["x-total-count"];
		return { data, itemsCount };
	}
)

const initialState = {
	items: [],
	status: ''
}

const postsSlice = createSlice ({
	name: 'posts',
	initialState,
	reducers: {
		setItems(state,action) {
			state.items = action.payload.data
		},
		setItemsCount(state,action) {
			// @ts-ignore
			state.itemsCount = action.payload.itemsCount
		},
	},
	extraReducers: {
		// @ts-ignore
		[fetchPosts.pending]:(state) => {
			state.status = "Loading"
			state.items = []
		},
		// @ts-ignore
		[fetchPosts.fulfilled]:(state,action) => {
			state.items = action.payload.data
			// @ts-ignore
			state.itemsCount = action.payload.itemsCount
			state.status = "success"
		},
		// @ts-ignore
		[fetchPosts.rejected]:(state) => {
			state.status = "error"
			state.items = []
		}
	},
})

export const { setItems, setItemsCount } = postsSlice.actions
export default postsSlice.reducer
