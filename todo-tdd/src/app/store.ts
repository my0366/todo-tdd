import {counterSlice} from "../features/counter/counter.slice.ts";
import {todoSlice} from "../features/todo/todo.slice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
        todos : todoSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch