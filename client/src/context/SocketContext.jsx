import {createContext, useContext, useState} from "react";


const SocketIOContext = createContext({
    socket: '',
    messages: []
})

export default function SocketIOProvider({children}){
    const [socket, setSocket] = useState('')
    const [messages, setMessages] = useState([])
    return (
        <SocketIOContext.Provider value={{socket, setSocket, messages, setMessages}}>
            {children}
        </SocketIOContext.Provider>
    )
}

export function useSocketIO()
{
    return useContext(SocketIOContext)
}