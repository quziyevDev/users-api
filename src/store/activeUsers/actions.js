import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

export const getUsers = createAsyncThunk('users/getAll', async (_, {}) => {
  const response = await api.get('/users')
  return response.data
})

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (id, { fulfillWithValue }) => {
    await api.delete(`/users/${id}`)
    console.log(id)
    return fulfillWithValue(id)
  }
)
