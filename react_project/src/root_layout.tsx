import type React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const RootLayout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="box-border min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-500 w-full flex h-20 items-center justify-between p-2 mb-2">
                <Link className="text-amber-50 text-5xl uppercase font-bold" to='/'>
                    <h1>Logo</h1>
                </Link>

                <div className="text-2xl text-amber-50 uppercase underline">
                    <NavLink className="hover:text-neutral-400" to='/test'>Test</NavLink>
                </div>
            </header>

            {/* content */}
            <main className="grow mx-0 m-auto">
                <Outlet/>
            </main>

            <footer className="bg-blue-500 w-full h-100 flex justify-center items-center">
                <h1 className="text-6xl uppercase text-blue-600">Footer</h1>
            </footer>
        </div>
    )
}

export default RootLayout;