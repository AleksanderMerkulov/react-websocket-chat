import './App.css'
import socketIO from 'socket.io-client'
import {Outlet} from "react-router-dom";

const socket = socketIO.connect('http://127.0.0.1:5000')

function App() {

  return (
      <div>
          <Outlet/>

      </div>
  )
}

export default App
