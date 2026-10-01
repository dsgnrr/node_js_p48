import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomePage from "./pages/home.js";
import ProfilePage from "./pages/profile.js";
import RootLayout from "./root_layout.js";
import React from "react";
import ClassPage from "./pages/class_component.js";
import UseEffectPage from "./pages/use-effect.js";
import PropsPage from "./pages/props.js";
import UseRefPage from "./pages/use-ref.js";
import SmartDubmCompPage from "./pages/smart-dumb-comp.js";


const NotFoundPage = ()=><div>
    <h1 className="text-7xl text-red-950 uppercase font-bold">404 Not Found. </h1>
    <Link to='/'>Go gome</Link>
</div>

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'profile/:id',
                element: <ProfilePage/>
            },
            {
                path: 'profile',
                element: <ProfilePage/>
            },
            {
                path: 'use-effect',
                element: <UseEffectPage/>
            },
            {
                path:"props",
                element:<PropsPage/>
            },
            {
                path: 'class-page',
                element: <ClassPage title="Class component"/>
            },
            {
                path:'use-ref',
                element: <UseRefPage/>
            },
            {
                path: 'smart-dumb',
                element: <SmartDubmCompPage/>
            }
            
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

const App:React.FC = ()=>{
    return <RouterProvider router={router}/>
}
export default App;