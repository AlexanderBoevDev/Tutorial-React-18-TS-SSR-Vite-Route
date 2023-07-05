import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  selectedAuthor: 0,
  currentPage: 1,
  sort: {
    name: 'Sort content id asc',
    sortProperty: '-id',
  }
}

const filterSlice = createSlice ({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSelectedAuthor(state, action) {
      state.selectedAuthor = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  }
})

export const selectFilter = (state) => state.filter;
export const { setSearchValue, setSelectedAuthor, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
