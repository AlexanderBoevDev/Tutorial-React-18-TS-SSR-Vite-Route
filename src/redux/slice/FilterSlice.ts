import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: 0
}

const filterSlice = createSlice ({
  name: 'filters',
  initialState,
  reducers: {
    setUserId(state, action) {
      console.log(action)
      state.userId = action.payload
    }
  }
})

export const {
  setUserId
} = filterSlice.actions
export default filterSlice.reducer
