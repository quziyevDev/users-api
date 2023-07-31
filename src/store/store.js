import { combineReducers, configureStore } from '@reduxjs/toolkit'
import activeUsersReducer from './activeUsers/reducer'

const reducers = combineReducers({
  activeUsers: activeUsersReducer,
})

const store = configureStore({
  reducer: reducers,
})

export default store
