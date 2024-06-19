import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import {useSocketIO} from "../context/SocketContext.jsx";
import styled from "styled-components";

const Form = styled.form`
      width: 20%;
      margin: 0 auto;
      
      & .form-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }
    `

const Button = styled.button`
  background: #c4c4fd;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 15px;

  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export default function Home(){

    // TODO Компонент отвечает за форму входа в чат. После туториала нужно будет переписать это в нормальный вид авторизации

    const {socket} = useSocketIO()
    const navigate = useNavigate()
    const [user, setUser] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/chat')
        socket.emit('join_to_chats', user)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Авторизация</h2>
                <div className={'form-container'}>
                    <label htmlFor="user">Имя</label>
                    <input placeholder={'Введите имя'} type="text" id='user' value={user} onChange={(e)=>setUser(e.target.value)}/>
                </div>
                <Button type={'submit'} disabled={user === ''?'disabled':null}>Войти</Button>
            </Form>
        </>

    )
}
