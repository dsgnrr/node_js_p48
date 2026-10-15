// store-file тут будуть описан стан, що зберігаємо і як можемо змінювати

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
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
        increment:(state)=>{
            state.value += state.step;
        },
        decrement:(state)=>{
            state.value -= state.step;
        },
        setStep:(state, action: PayloadAction<number>)=>{
            state.step = action.payload;
        },
        reset: ()=>initialState
    }
})