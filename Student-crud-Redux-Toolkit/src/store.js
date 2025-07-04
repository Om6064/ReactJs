import { configureStore } from "@reduxjs/toolkit"
import studentReduser from "./feature/student/studentSlice"



const store = configureStore({
    reducer: {
        student : studentReduser
    },
})

export default store