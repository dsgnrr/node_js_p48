// Слайс - це "шматок" стейту, тут ви описуєте, початковий стан, функції змінення стану

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Це структура нашого стейту (state)
export interface CounterState{
    value: number;
    step:number;
}

const initialState:CounterState={
    value: 0,
    step: 1
};

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        /**
         * Тут ми описуємо функції-редюсери. 
         * Кожна функція тут — це РЕДЮСЕР, який безпосередньо змінює стейт.
         */
        increment:(state)=>{
            state.value += state.step;
        },
        decrement:(state)=>{
            state.value -= state.step;
        },
        setStep:(state, action: PayloadAction<number>)=>{
            // action.payload — це дані, які передали разом з екшеном
            state.step = action.payload;
        },
        reset: ()=>initialState
    }
})

// 1. Redux Toolkit бере всі наші редюсери і збирає їх в один загальний редюсер
const counterReducer = counterSlice.reducer;

// 2. Redux Toolkit автоматично створює ЕКШЕНИ (дії) на основі імен редюсерів вище.
// Викликаючи increment() чи setStep(5), ми створюємо об'єкт-екшен (наприклад, { type: 'counter/increment' })
export const {increment, decrement, setStep, reset} = counterSlice.actions;
export default counterReducer;