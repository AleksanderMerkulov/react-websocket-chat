import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import {useSocketIO} from "../context/SocketContext.jsx";

export default function Home(){

    // TODO Компонент отвечает за форму входа в чат. После туториала нужно будет переписать это в нормальный вид авторизации

    const {socket} = useSocketIO()
    const navigate = useNavigate()
    const [user, setUser] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/chat')
    }

    return (
        <>
        <div>Homepage</div>
            <form onSubmit={handleSubmit}>
                <h2>Войти в чат</h2>
                <label htmlFor="user"></label>
                <input type="text" id='user' value={user} onChange={(e)=>setUser(e.target.value)}/>
                <button type={'submit'}>Войти</button>
            </form>
        </>

    )
}
