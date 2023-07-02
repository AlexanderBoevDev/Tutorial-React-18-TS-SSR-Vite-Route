import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedAuthor: 0,
  currentPage: 1,
  sort: {
    name: 'Sort title asc',
    sortProperty: 'title',
  }
}

const filterSlice = createSlice ({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedAuthor(state, action) {
      state.selectedAuthor = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  }
})

export const { setSelectedAuthor, setSort, setCurrentPage } = filterSlice.actions
export default filterSlice.reducer
