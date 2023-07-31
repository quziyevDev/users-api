import { createReducer, createSlice, isRejected } from '@reduxjs/toolkit'
import { deleteUser, getUsers } from './actions'

const initialState = {
  isLoading: false,
  users: [],
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getUsers.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.isLoading = false
    state.users = action.payload
  })
  builder.addCase(deleteUser.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(deleteUser.fulfilled, (state, action) => {
    state.isLoading = false
    console.log(action)
    state.users = state.users.filter((user) => user.id !== action.payload)
  })
  builder.addMatcher(isRejected(deleteUser, getUsers), (state) => {
    state.isLoading = false
  })
})

export default reducer
