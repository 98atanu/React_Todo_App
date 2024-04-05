import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'todo',
    initialState : [],
    reducers : {
        addTodo : (state,action) => {
            state.push({
                task : action.payload.task,
                id : action.payload.id
            })
        },
        deleteTodo : (state,action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
                  
        },

    }
})

export const { addTodo, deleteTodo, } = TodoSlice.actions;
export default TodoSlice.reducer;