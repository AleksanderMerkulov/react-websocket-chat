import {createContext, useContext, useState} from "react";


const SocketIOContext = createContext({
    socket: {},
    messages: []
})

export default function SocketIOProvider({children}){
    const [socket, setSocket] = useState({})
    const [messages, setMessages] = useState([])
    const [usersOnline, setUsersOnline] = useState([])
    return (
        <SocketIOContext.Provider value={{socket, setSocket, messages, setMessages, usersOnline, setUsersOnline}}>
            {children}
        </SocketIOContext.Provider>
    )
}

export function useSocketIO()
{
    return useContext(SocketIOContext)
}