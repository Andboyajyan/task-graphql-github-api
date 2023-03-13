import {combineReducers, configureStore} from '@reduxjs/toolkit'
import reposSlice from "./slices/repos"

const reducer = combineReducers({reposSlice})

const store = configureStore({
    reducer,
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;