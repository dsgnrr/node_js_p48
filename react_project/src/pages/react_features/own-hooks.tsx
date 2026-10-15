import { useContext, useEffect, useState } from "react";
import useDebounce from "../../hooks/use-debounce.js";
import useLocalStorage from "../../hooks/use-local-storage.js";
import { ThemeContext, useTheme } from "../../context/theme-context.js";

const OwnHooksPage = () => {

    // #region useDebounce
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isSearchField, setIsSearchField] = useState<boolean>(false);
    const debounceSearchQuery = useDebounce(searchQuery, 300);

    useEffect(() => {
        setIsSearchField(false);
        if (debounceSearchQuery.trim()) {
            setIsSearchField(true);
        }
    }, [debounceSearchQuery])
    // #endregion useDebounce

    //#region useLocalStorage
    // логіку зі зберіганням теми у локальному сховищі, виносимо у ThemeContex path: ./src/context/theme-context.tsx
    // const [theme, setTheme] = useLocalStorage<string>('app_theme', 'light');

    // прямої необхідності в хендлері для конпки вже немає
    // в onClick достатньо тепер передати switchTheme
    // може знадобитись якщо окрім перемикання теми, ви ще виконуєте якусб додаткову логіку
    const changeTheme = () => {
        // тепер коли тему контролює ThemeContext виконувати цю інструкцію нам більше не потрібно
        // setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

        // Достатньо викликати перемикач теми із контексту
        switchTheme();
    }

    //#endregion useLocalStorage

    // Отримуємо поточний стан теми із ThemeContext
    // Хук потрібен для перевірки, що в додаток був впроваджений ThemeContext
    const {theme, switchTheme} = useTheme();

    return (
        <div>
            <h1>Current theme: {theme}</h1>
            <div>
                <h1>1. Hook: useDebounce</h1>
                <input className="
                border-2
                border-black
                "
                    placeholder="Search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {isSearchField && <p>Send request to API</p>}
            </div>
            <div>
                <h2>2. Hook: useLocalStorage</h2>
                <button onClick={switchTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Switch theme: {theme}
                </button>
            </div>
        </div>
    )
}

export default OwnHooksPage;