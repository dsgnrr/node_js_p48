import { useEffect, useState } from "react";
import useDebounce from "../hooks/use-debounce.js";
import useLocalStorage from "../hooks/use-local-storage.js";

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

    const [theme, setTheme] = useLocalStorage<string>('app_theme', 'light');

    const changeTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    //#endregion useLocalStorage

    return (
        <div>
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
                <button onClick={changeTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Switch theme: {theme}
                </button>
            </div>
        </div>
    )
}

export default OwnHooksPage;