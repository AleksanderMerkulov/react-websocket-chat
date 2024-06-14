import React from 'react';
import styled from "styled-components";

const Sidebar = () => {

    const SidebarContainer = styled.aside`
      width: 300px;
      background: aliceblue;
      margin-right: 5px;
      border-right: 1px solid black;
    `

    const ChatContainer = styled.ul`
      padding: 0;
    `

    const ChatItem = styled.li`
      list-style: none;
      padding: 10px 20px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      margin: 10px 10px 0 10px;
      border-radius: 4px;
      transition: 0.15s;

      &:first-child {
        margin-top: 0;
      }

      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    `

    return (
        <SidebarContainer>
            <h1>Ваши чаты</h1>
            <ChatContainer>
                <ChatItem>user1</ChatItem>
                <ChatItem>user2</ChatItem>
                <ChatItem>user3</ChatItem>
            </ChatContainer>
        </SidebarContainer>
    );
};

export default Sidebar;