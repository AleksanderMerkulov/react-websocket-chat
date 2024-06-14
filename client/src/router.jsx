import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home";
import ChatPage from "./components/chat/ChatPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/chat',
                element: <ChatPage/>
            }
        ]
    },
]);

export default router