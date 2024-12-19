import {addTodo, deleteTodo, todoSlice, TodoState} from "./todo.slice.ts";

describe('todoSlice', () => {
    const initialState: TodoState = {
        todos: [],
    };

    it('should handle initial state', () => {
        expect(todoSlice.reducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle addTodo', () => {
        const actual = todoSlice.reducer(initialState, addTodo('Test'));
        expect(actual.todos).toEqual(['Test']);
    });

    it('should handle deleteTodo', () => {
        const stateWithTodo: TodoState = {
            todos: ['Test Todo'],
        };
        const actual = todoSlice.reducer(stateWithTodo, deleteTodo(0));
        expect(actual.todos).toEqual([]);
    });
});