import {configureStore} from '@reduxjs/toolkit'
import notificationSlice from './notification'
import countriesSlice from './countriespreview'

const store = configureStore({
    reducer:{notification:notificationSlice.reducer, countries:countriesSlice.reducer}
})

export default store