import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomePage from "./pages/home.js";
import ProfilePage from "./pages/react_features/profile.js";
import AuthProfilePage from "./pages/auth_pages/profile-page.js";
import RootLayout from "./root_layout.js";
import React, { useState } from "react";
import ClassPage from "./pages/react_features/class_component.js";
import UseEffectPage from "./pages/react_features/use-effect.js";
import PropsPage from "./pages/react_features/props.js";
import UseRefPage from "./pages/react_features/use-ref.js";
import SmartDubmCompPage from "./pages/react_features/smart-dumb-comp.js";
import CoursePage from "./pages/react_features/course_page.js";
import AuthForm from "./pages/react_features/hook-form.js";
import ZodForm from "./pages/react_features/zod-resolver.js";
import UserPage from "./pages/react_features/user-page.js";
import TanStackQueryPage from "./pages/react_features/tanstack-query.js";
import OwnHooksPage from "./pages/react_features/own-hooks.js";
import { ThemeContext, ThemeProvider } from "./context/theme-context.js";
import { AuthProvider } from "./context/auth-context.js";
import { LoginPage } from "./pages/auth_pages/login-page.js";
import AuthRoute from "./components/auth/auth-route.js";


const NotFoundPage = () => <div>
    <h1 className="text-7xl text-red-950 uppercase font-bold">404 Not Found. </h1>
    <Link to='/'>Go gome</Link>
</div>

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'profile/:id',
                element: <ProfilePage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: 'use-effect',
                element: <UseEffectPage />
            },
            {
                path: "props",
                element: <PropsPage />
            },
            {
                path: 'class-page',
                element: <ClassPage title="Class component" />
            },
            {
                path: 'use-ref',
                element: <UseRefPage />
            },
            {
                path: 'smart-dumb',
                element: <SmartDubmCompPage />
            },
            {
                path: 'zod-page',
                element: <CoursePage />
            },
            {
                path: 'hook-form',
                element: <AuthForm />
            },
            {
                path: 'zod-form',
                element: <ZodForm />
            },
            {
                path: 'user-page',
                element: <UserPage />
            },
            {
                path: 'tanstack-query',
                element: <TanStackQueryPage />
            },
            {
                path: 'own-hooks',
                element: <OwnHooksPage />
            },
            {
                path:'login',
                element: <LoginPage/>
            },
            {
                path:'user',
                element: <AuthRoute/>,
                children:[
                    {
                        path:'profile',
                        element: <AuthProfilePage/>
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

const App: React.FC = () => {
    // const [theme, setTheme] = useState<'dark'|'light'>('light');
    // return (
    //     <ThemeContext.Provider value={theme}>
    //         <RouterProvider router={router} />
    //     </ThemeContext.Provider>
    // )

    return (
        <ThemeProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </ThemeProvider>
    )
}
export default App;