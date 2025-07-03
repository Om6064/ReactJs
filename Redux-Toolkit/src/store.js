import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./feature/couter/counterSlice"


const store = configureStore({
    reducer: {
        counterReducer
    },
})

export default store