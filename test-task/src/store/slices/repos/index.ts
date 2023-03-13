import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    repos:[],
    isLoading: false
}

const reposSlice = createSlice({
    name: "allProducts/slice",
    initialState,
    reducers: {
        setRepositories(state, action) {
           state.repos = action.payload
        },
        isLoading(state, action){
            state.isLoading = action.payload
        }
    },
    extraReducers: {}
})

export const { setRepositories, isLoading} = reposSlice.actions
export default reposSlice.reducer