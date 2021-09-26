import {createSlice} from '@reduxjs/toolkit'

const countriesState = {countries:[]}

const countriesSlice = createSlice({
    name:'countries',
    initialState: countriesState,
    reducers:{
        fetched(state,action){
            state.countries = action.payload
        }
    }
})


export const countriesActions = countriesSlice.actions

export default countriesSlice