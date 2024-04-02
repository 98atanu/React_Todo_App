import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'todo',
    initialState : localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')).todo : {todoList: []},
    reducers : {
        addTodo : (state,action) => {
            state.todoList.push({
                task : action.payload.task,
                id : action.payload.id,
            })
        },
        deleteTodo : (state,action) => {
            return state.todoList.filter((todo)=> todo.id !== action.payload.id)
        },

    }
})

export const { addTodo, deleteTodo, } = TodoSlice.actions;
export default TodoSlice.reducer;