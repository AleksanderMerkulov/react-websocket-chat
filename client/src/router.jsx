import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/test',
                element: <Home/>
            }
        ]
    },
]);

export default router