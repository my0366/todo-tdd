import {createBrowserRouter} from "react-router-dom";
import {createElement} from "react";
import HomePage from "../../pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: createElement(HomePage)
    },
]);