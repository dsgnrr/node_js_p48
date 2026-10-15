import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js'


// Створюємо головне Redux-сховище (Store), яке зберігає глобальний стейт всього додатку.
export const store = configureStore({
    // В об'єкті reducer ми комбінуємо головні редюсери з усіх слайсів.
    // Ключ (наприклад, 'counter') визначає назву гілки (slice) у глобальному стейті.
    reducer:{
        counter: counterReducer,
        // user: userReducer
        // cart: cartReducer
        //  ...
    }
});

// Автоматично виводимо тип глобального стейту (RootState) на основі нашого store.
// Використовується в useSelector: (state: RootState) => state.counter.value
export type RootState = ReturnType<typeof store.getState>;

// Автоматично виводимо тип функції dispatch (AppDispatch).
// Використовується для типізації useDispatch, щоб правильно працювали асинхронні екшени (thunks).
export type AppDispatch = typeof store.dispatch;