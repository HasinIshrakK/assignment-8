import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import ErrorPages from '../Pages/Error/ErrorPages';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';

const router = createBrowserRouter(
    [
        {
            path:'/',
            Component: App,
            errorElement:<ErrorPages></ErrorPages>,

            children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            }
            ]
        }
    ]
)

export default router;