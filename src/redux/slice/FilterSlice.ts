import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedAuthor: 0,
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
    }
  }
})

export const { setSelectedAuthor, setSort } = filterSlice.actions
export default filterSlice.reducer
