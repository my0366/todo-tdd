import {counterSlice, CounterState, decrement, increment} from "./counter.slice.ts";

describe('counterSlice', () => {
    const initialState: CounterState = {
        value: 0,
    };

    it('should initial State', () => {
        expect(counterSlice.reducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle addTodo', () => {
        const actual = counterSlice.reducer(initialState, increment());
        expect(actual.value).toEqual(1);
    });

    it('should handle deleteTodo', () => {
        const counterState: CounterState = {
            value: 1,
        };
        const actual = counterSlice.reducer(counterState, decrement());
        expect(actual.value).toEqual(0);
    });
})