import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import ErrorPages from '../Pages/Error/ErrorPages';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Error from '../Pages/Error/Error';
import AppDetails from '../Pages/AppDetails/AppDetails';

const router = createBrowserRouter(
    [
        {
            path:'/',
            Component: App,
            errorElement:<Error></Error>,

            children:[
            {
                index: true,
                Component: Home,
                loader: () => fetch('/appsData.json')
            },
            {
                path:'/apps',
                Component: Apps,
                loader: () => fetch('/appsData.json')
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/apps/:id',
                Component: AppDetails,
                loader: () => fetch('/appsData.json')
            },
            {
                path: '/*',
                Component: ErrorPages
            }
            ]
        }
    ]
)

export default router;