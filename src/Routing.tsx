import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Column from "./pages/Column";
import Home from "./pages/Home";
import MyRecord from "./pages/MyRecord";

export const router = createBrowserRouter([
    {
        path: "/",
        element: < Home />,
    },
    {
        path: "/column",
        element: <Column />,
    },
    {
        path: "/my-record",
        element: <MyRecord />,
    },
    {
        path: "*",
        element: < ErrorPage />,
    }
]);