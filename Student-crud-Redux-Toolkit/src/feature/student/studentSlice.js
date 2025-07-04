import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice(
    {
        name: "students",
        initialState: {
            list:[
                {name : "aryan", age : 19,course:"fsd"}
            ]
        },
        reducers:{
            // increment(state,action){
            //     state.state =  state.state+1;
            // },
            // decrement(state,action){
            //     state.state =  state.state-1;
            // },
            // reset(state,action){
            //      state.state = 0;
            // }
            addStudents: (state,action) => {

            },
            removeStudents: (state,action) => {

            },
            updateStudents:(state,action) => {

            } 
        }
    }
)
export const {addStudents,removeStudents,updateStudents} = studentSlice.actions;
export default studentSlice.reducer
console.log(studentSlice);
