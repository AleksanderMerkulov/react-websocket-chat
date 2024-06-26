import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {useNavigate} from "react-router-dom";
import {useSocketIO} from "../../../context/SocketContext.jsx";

const Header = styled.div`
        
    `
const MessageContainer = styled.div`
        
    `

const Message = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;

  width: 80%;
  margin-left: ${props => props.$to_me ? 'auto' : '0'};
  margin-bottom: 10px;

  background: antiquewhite;

  & .message-name {
    padding-bottom: 2px;
    border-bottom: 1px solid #a9a9a9;
  }
`

const Body = () => {
    //отвечает за рендер сообщений из массива messages и выход из чата

    const navigate = useNavigate()
    const {socket, messages, setMessages} = useSocketIO()


    function handleLeave(){
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <>
            <Header>
                <button
                    onClick={handleLeave}>Покинуть чат</button>
            </Header>
            <MessageContainer>
                <Message>
                    <div className={'message-name'}>Вы</div>
                    <p>Решение заключается в том, чтобы вынести стилизованные компоненты за пределы компонента Home. Это предотвратит их переопределение при каждом рендере.</p>
                </Message>
                <Message to_me="true">
                    <div className={'message-name'}>Dimoooon</div>
                    <p>Проблема с вводом данных в input может возникать из-за того, что компонент Form переопределяется при каждом рендере. Это может приводить к потере фокуса на элементе ввода.</p>
                </Message>

                {
                    messages.map((message)=>{
                        if (message.socketID === socket.id)
                            return (
                                <Message>
                                    <div className={'message-name'}>Вы</div>
                                    <p>{message.message}</p>
                                </Message>
                            )
                        else
                            return (
                                <Message to_me="true">
                                    <div className={'message-name'}>Вы</div>
                                    <p>{message.message}</p>
                                </Message>
                            )
                    })
                }

            </MessageContainer>

        </>
    );
};

export default Body;