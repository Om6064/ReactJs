import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            state:0
        },
        reducers:{
            increment(state,action){
                state.state =  state.state+1;
            },
            decrement(state,action){
                state.state =  state.state-1;
            },
            reset(state,action){
                 state.state = 0;
            }
        }
    }
)
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer
console.log(counterSlice);
