import {createContext, useContext, useState} from "react";


const SocketIOContext = createContext({
    socket: '',
})

export default function SocketIOProvider({children}){
    const [socket, setSocket] = useState('')
    return (
        <SocketIOContext.Provider value={{socket, setSocket}}>
            {children}
        </SocketIOContext.Provider>
    )
}

export function useSocketIO()
{
    return useContext(SocketIOContext)
}