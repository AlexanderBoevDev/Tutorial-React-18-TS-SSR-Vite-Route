import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export type FetchPostsArgs = {
	currentPage: number;
	filtersAuthor: number;
	sortBy: string;
	order: string;
	search: string;
};

type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

interface PostSliceState {
	items: Post[],
	status: Status;
}

export const fetchPosts = createAsyncThunk (
	"posts/fetchPostsItems", async (params: FetchPostsArgs) => {
		const { currentPage, filtersAuthor, sortBy, order, search } = params;
		const { data, headers } = await axios.get<Post[]>(
			`http://localhost:4301/posts?_limit=12&_page=${currentPage}${filtersAuthor}&_sort=${sortBy}&_order=${order}${search}`)
		const itemsCount = headers["x-total-count"];
		return { data, itemsCount };
	}
)

const initialState: PostSliceState = {
	items: [],
	status: Status.LOADING,
}

const postsSlice = createSlice ({
	name: "posts",
	initialState,
	reducers: {
		setItems(state,action ) {
			state.items = action.payload.data;
		},
		setItemsCount(state,action) {
			// @ts-ignore
			state.itemsCount = action.payload.itemsCount;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.status = Status.LOADING;
			state.items = [];
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.items = action.payload.data;
			// @ts-ignore
			state.itemsCount = action.payload.itemsCount;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.status = Status.ERROR;
			state.items = [];
		});
	},
})

export const selectItemsPost = (state: RootState) => state.posts.items;
export const selectStatusPosts = (state: RootState) => state.posts.status;
// @ts-ignore
export const selectItemsCount = (state: RootState) => state.posts.itemsCount;
export default postsSlice.reducer;
