import React from 'react';
import Sidebar from "./components/Sidebar.jsx";
import Body from "./components/Body.jsx";
import MessageBlock from "./components/MessageBlock.jsx";
import styled from "styled-components";

const ChatPage = () => {

    const MessageContainer = styled.div`
      width: 100%;
      display: inline-flex;
    `

    return (
        <MessageContainer>
            <Sidebar/>
            <div>
                <Body/>
                <MessageBlock/>
            </div>
        </MessageContainer>
    );
};

export default ChatPage;