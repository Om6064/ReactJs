import { createSlice, nanoid } from "@reduxjs/toolkit";

const studentSlice = createSlice(
    {
        name: "students",
        initialState: {
            list: []
        },
        reducers: {
            addStudents: (state, action) => {
                state.list.push({ id: nanoid(), ...action.payload })
            },
            removeStudents: (state, action) => {
                state.list = state.list.filter((stu) => stu.id !== action.payload);
            },
            updateStudents: (state, action) => {
                const index = state.list.findIndex((stu) => stu.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            }
        }
    }
)
export const { addStudents, removeStudents, updateStudents } = studentSlice.actions;
export default studentSlice.reducer
console.log(studentSlice);
