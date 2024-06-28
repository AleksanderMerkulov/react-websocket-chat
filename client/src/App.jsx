import './App.css'
import socketIO from 'socket.io-client'
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import SocketIOProvider, {useSocketIO} from "./context/SocketContext.jsx";
import {useEffect} from "react";

const socket = socketIO.connect('http://127.0.0.1:5000')


const Layout = styled.div`
      width: 100%;
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      
    `
const Content = styled.main`
      width: 100%;
    `
const ContentLayout = styled.div`
      width: 100%;
      display: inline-flex;
    `
const Header = styled.header`
      width: 100%;
      grid-row: 1;
      height: 50px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      padding: 5px 0;
      
      .container{
        display: flex;
        
      }
    `
const Aside = styled.aside`
      width: 300px;
    `

function App() {
    // Отвечает за инициализацию сокета и его передачу в SocketContext
    //  также ждёт сообщения от сервера и если оно не наше, то добавляет его в массив сообщений
    //  также здесь простраивается основной layout вёрстки


    const {setSocket, setMessages, messages, setUsersOnline} = useSocketIO()

    useEffect(() => {
        function f(){
            setSocket(socket)
            socket.on('response', (newMessage)=> {
                if (newMessage.id !== socket.id){
                    setMessages([...messages, newMessage])
                }
            })
            socket.on('join_to_online', (newUser)=>{
                setUsersOnline(newUser)
                console.log(newUser)
            })
        }
        f()
    }, []);


  return (
      <Layout>
          <Header>
              <div className="container">
                  <img src="/vite.svg" alt=""/>
              </div>
          </Header>
          <Content>
              <div className="container">
                  <Outlet/>
              </div>
          </Content>
      </Layout>
  )
}

export default App
