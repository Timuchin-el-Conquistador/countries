import {createSlice} from '@reduxjs/toolkit' 


const notificationState = {notification:{}}

const notificationSlice = createSlice({
    name:'notification',
    initialState: notificationState, 
    reducers:{
        notificate(state,action){
            state.notification.title = action.payload.title
            state.notification.status = action.payload.status
            state.notification.value = action.payload.value
        }
    }
})

export const notificationActions = notificationSlice.actions

export default notificationSlice 