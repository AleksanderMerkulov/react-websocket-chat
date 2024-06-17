import React from 'react';
import Sidebar from "./components/Sidebar.jsx";
import Body from "./components/Body.jsx";
import MessageBlock from "./components/MessageBlock.jsx";
import styled from "styled-components";

const ChatPage = () => {

    const MessageContainer = styled.div`
      width: 100%;
      height: 100%;
      display: inline-flex;
    `

    const ChatContainer = styled.div`
      width: 100%;
      margin-top: auto;
      margin-bottom: 20px;
      
    `

    return (
        <MessageContainer>
            <Sidebar/>
            <ChatContainer>
                <Body/>
                <MessageBlock/>
            </ChatContainer>
        </MessageContainer>
    );
};

export default ChatPage;