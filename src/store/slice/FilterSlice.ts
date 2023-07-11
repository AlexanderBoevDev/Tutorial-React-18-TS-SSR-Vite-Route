import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProperty: "id" | "title" | "userId" | "-id" | "-title" | "-userId";
}

export interface FilterSliceState {
  searchValue: string;
  selectedAuthor: number;
  currentPage: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  selectedAuthor: 0,
  currentPage: 1,
  sort: {
    name: "Sort content id desc",
    sortProperty: "id",
  }
}

const filterPosts = createSlice ({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSelectedAuthor(state, action: PayloadAction<number>) {
      state.selectedAuthor = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
})

export const selectFilter = (state:RootState) => state.filter;
export const { setSearchValue, setSelectedAuthor, setSort, setCurrentPage } = filterPosts.actions;
export default filterPosts.reducer;
