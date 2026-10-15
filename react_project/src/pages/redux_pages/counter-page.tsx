import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../state/store.js";
import { decrement, increment, reset, setStep } from "../../state/counterSlice.js";
import { Prism as SyntaxHighliter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CounterPage = () => {
    // Дістаємо дані зі стейту
    const { value, step } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 font-sans text-gray-800">
            
            {/* БЛОК 1: ПРАЦЮЮЧИЙ ПРИКЛАД */}
            <section className="mb-16 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <div className="mb-6 border-b border-gray-100 pb-4">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Інтерактивний приклад</h1>
                    <p className="text-gray-500 mt-1">Демонстрація роботи Redux State на базі лічильника.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Відображення стану */}
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-inner">
                        <h2 className="text-lg font-bold text-gray-700 mb-2">Стан стору:</h2>
                        <div className="space-y-1 text-gray-600 font-mono text-sm">
                            <p>value: <span className="text-blue-600 font-bold text-base">{value}</span></p>
                            <p>step: <span className="text-blue-600 font-bold text-base">{step}</span></p>
                        </div>
                    </div>

                    {/* Кнопки зміни значення */}
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Керування значенням</span>
                        <div className="flex gap-2">
                            <button 
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                                onClick={() => dispatch(decrement())}
                            >
                                -{step}
                            </button>
                            <button 
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                                onClick={() => dispatch(increment())}
                            >
                                +{step}
                            </button>
                        </div>
                    </div>

                    {/* Кнопки кроку */}
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Налаштування кроку</span>
                        <div className="flex flex-wrap gap-2">
                            <button 
                                className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                                onClick={() => dispatch(setStep(1))}
                            >
                                Крок: 1
                            </button>
                            <button 
                                className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                                onClick={() => dispatch(setStep(5))}
                            >
                                Крок: 5
                            </button>
                            <button 
                                className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                                onClick={() => dispatch(setStep(10))}
                            >
                                Крок: 10
                            </button>
                            <button 
                                className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                                onClick={() => dispatch(reset())}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* РОЗДІЛЬНИК */}
            <div className="relative flex py-5 items-center mb-10">
                <div className="grow border-t border-gray-200"></div>
                <span className="shrink mx-4 text-gray-400 text-sm font-semibold uppercase tracking-widest">Освітній гайд</span>
                <div className="grow border-t border-gray-200"></div>
            </div>

            {/* БЛОК 2: ПОКРОКОВИЙ ІНСТРУКТАЖ */}
            <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
                <div className="mb-8 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Як налаштувати Redux</h2>
                    <p className="text-gray-500 mt-1">Покроковий посібник з інтеграції сучасного Redux Toolkit у React та TypeScript проєкт.</p>
                </div>

                {/* Попередження */}
                <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
                    <div className="flex items-start gap-3">
                        <span className="text-amber-600 text-xl font-bold">⚠️</span>
                        <div>
                            <h3 className="text-amber-900 font-bold text-base">Зверніть увагу</h3>
                            <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                                У шапці кожного блоку коду вказані конкретні шляхи до файлів (наприклад, <code className="bg-amber-100 px-1.5 py-0.5 rounded text-amber-900 font-mono text-xs">./src/pages/CounterPage.tsx</code>). Уважно читайте <strong>детальні коментарі всередині коду</strong> — в них пояснюється використання методів та хуків.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Крок 0 */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">0</span>
                        <h3 className="text-xl font-bold text-gray-900">Встановлення пакетів</h3>
                    </div>
                    <p className="text-gray-600 ml-11 mb-3">
                        Перш за все встановлюємо бібліотеку управління станом (<code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">Redux Toolkit</code>) та біндинги для React (<code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">react-redux</code>). TypeScript-типи вже входять до їх складу.
                    </p>
                    <div className="ml-11 max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
                        <div className="bg-gray-800/80 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/60">
                            <span className="text-xs text-gray-300 font-mono flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                <span className="ml-2">terminal</span>
                            </span>
                        </div>
                        <SyntaxHighliter
                            language="bash"
                            style={atomDark}
                            showLineNumbers={false}
                            wrapLongLines
                            wrapLines
                        >{`npm install @reduxjs/toolkit react-redux`}</SyntaxHighliter>
                    </div>
                </div>

                {/* Крок 1 */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">1</span>
                        <h3 className="text-xl font-bold text-gray-900">Створюємо слайс</h3>
                    </div>
                    <p className="text-gray-600 ml-11 mb-3">
                        Слайс — це "шматок" глобального стейту. Тут ми описуємо початковий стан (<code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">initialState</code>) та функції (<code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">reducers</code>) для його зміни.
                    </p>
                    <div className="ml-11 max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
                        <div className="bg-gray-800/80 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/60">
                            <span className="text-xs text-gray-300 font-mono flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                <span className="ml-2">./src/state/counterSlice.ts</span>
                            </span>
                        </div>
                        <SyntaxHighliter
                            language="typescript"
                            style={atomDark}
                            showLineNumbers
                            wrapLongLines
                            wrapLines
                        >{`import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
    step: number;
}

const initialState: CounterState = {
    value: 0,
    step: 1
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.step;
        },
        decrement: (state) => {
            state.value -= state.step;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        reset: () => initialState
    }
});

export const { increment, decrement, setStep, reset } = counterSlice.actions;
export default counterSlice.reducer;`}</SyntaxHighliter>
                    </div>
                </div>

                {/* Крок 2 */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">2</span>
                        <h3 className="text-xl font-bold text-gray-900">Створюємо глобальний стор (Store)</h3>
                    </div>
                    <p className="text-gray-600 ml-11 mb-3">
                        Збираємо всі слайси в єдине сховище та експортуємо типізацію для хуків (<code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">RootState</code> та <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">AppDispatch</code>).
                    </p>
                    <div className="ml-11 max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
                        <div className="bg-gray-800/80 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/60">
                            <span className="text-xs text-gray-300 font-mono flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                <span className="ml-2">./src/state/state.ts</span>
                            </span>
                        </div>
                        <SyntaxHighliter
                            language="typescript"
                            style={atomDark}
                            showLineNumbers
                            wrapLongLines
                            wrapLines
                        >{`import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // сюди додаватимуться інші слайси
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}</SyntaxHighliter>
                    </div>
                </div>

                {/* Крок 3 */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">3</span>
                        <h3 className="text-xl font-bold text-gray-900">Підключаємо Provider</h3>
                    </div>
                    <p className="text-gray-600 ml-11 mb-3">
                        Огортаємо весь додаток у компонент <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">&lt;Provider&gt;</code>, передаючи йому створений <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">store</code>.
                    </p>
                    <div className="ml-11 max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
                        <div className="bg-gray-800/80 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/60">
                            <span className="text-xs text-gray-300 font-mono flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                <span className="ml-2">./src/main.tsx</span>
                            </span>
                        </div>
                        <SyntaxHighliter
                            language="tsx"
                            style={atomDark}
                            showLineNumbers
                            wrapLongLines
                            wrapLines
                        >{`import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/state.js';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);`}</SyntaxHighliter>
                    </div>
                </div>

                {/* Крок 4 */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">4</span>
                        <h3 className="text-xl font-bold text-gray-900">Використовуємо Redux у компоненті</h3>
                    </div>
                    <p className="text-gray-600 ml-11 mb-3">
                        Використовуємо <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">useSelector</code> для читання стейту та <code className="font-mono text-xs bg-gray-200 px-1 py-0.5 rounded">useDispatch</code> для виклику екшенів редюсера.
                    </p>
                    <div className="ml-11 max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
                        <div className="bg-gray-800/80 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/60">
                            <span className="text-xs text-gray-300 font-mono flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                                <span className="ml-2">./src/pages/redux_pages/CounterPage.tsx</span>
                            </span>
                        </div>
                        <SyntaxHighliter
                            language="tsx"
                            style={atomDark}
                            showLineNumbers
                            wrapLongLines
                            wrapLines
                        >{`import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../state/state.js";
import { increment, decrement, setStep, reset } from "../state/counterSlice.js";

const CounterPage = () => {
    // 1. Читаємо стейт через useSelector та типізуємо через RootState
    const { value, step } = useSelector((state: RootState) => state.counter);
    
    // 2. Ініціалізуємо dispatch за допомогою AppDispatch
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <p>Значення: {value}</p>
            {/* 3. Викликаємо екшени, створені редюсерами */}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(setStep(5))}>Встановити крок 5</button>
            <button onClick={() => dispatch(reset())}>Скинути</button>
        </div>
    );
};

export default CounterPage;`}</SyntaxHighliter>
                    </div>
                </div>

                {/* Фінальна порада */}
                <div className="ml-11 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl">
                    <p className="text-blue-900 font-medium text-sm">
                        💡 Щоб додати новий функціонал у майбутньому, просто створюйте окремі слайси за аналогією з першим кроком та підключайте їх у сховищі!
                    </p>
                </div>
            </section>

        </div>
    );
};

export default CounterPage;