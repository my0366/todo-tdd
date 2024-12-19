import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TodoState {
    todos: string[];
}

const initialState: TodoState = {
    todos :[]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, title : PayloadAction<string>) => {
            state.todos.push(title.payload);
        },
        deleteTodo: (state, index : PayloadAction<number>) => {
            state.todos.splice(index.payload, 1);
        },
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
