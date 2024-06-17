import React from 'react';
import styled from "styled-components";

const Sidebar = () => {

    const SidebarContainer = styled.aside`
      width: 300px;
      margin-right: 5px;
      border-right: 1px solid black;
    `

    const ChatContainer = styled.ul`
      padding: 0;
      margin: 0;
    `

    const ChatItem = styled.li`
      list-style: none;
      padding: 10px 20px 10px 10px;
      //margin-top: 10px;
      transition: 0.15s;

      &:first-child {
        margin-top: 0;
      }

      &:hover {
        background: #e7e7e7;
        cursor: pointer;
      }
    `

    const Title = styled.h1`
      margin: 0 0 10px 0;
    `

    return (
        <SidebarContainer>
            <Title>Ваши чаты</Title>
            <ChatContainer>
                <ChatItem>user1</ChatItem>
                <ChatItem>user2</ChatItem>
                <ChatItem>user3</ChatItem>
            </ChatContainer>
        </SidebarContainer>
    );
};

export default Sidebar;