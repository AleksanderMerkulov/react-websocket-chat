import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from "./router.jsx";

import {
    RouterProvider,
} from "react-router-dom";
import SocketIOProvider from "./context/SocketContext.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SocketIOProvider>
        <RouterProvider router={router} />
      </SocketIOProvider>
  </React.StrictMode>,
)
