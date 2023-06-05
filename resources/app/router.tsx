import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from "@/layouts/RootLayout";
import RouteLoading from "@/components/RouteLoading";
import Error404 from "@/components/404";

const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/Login'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />}
        >
            <Route
                index
                element={
                    <React.Suspense fallback={<RouteLoading />}>
                        <Home />
                    </React.Suspense>
                }
            />
            <Route
                path="/login"
                element={
                    <React.Suspense fallback={<RouteLoading />}>
                        <Login />
                    </React.Suspense>
                }
            />
            <Route
                path="*"
                element={<Error404 />}
            />
        </Route>
    )
);

export default router;
