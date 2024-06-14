import React from 'react';
import styled from "styled-components";

const Body = () => {

    const Header = styled.div`
        
    `
    const MessageContainer = styled.div`
        
    `

    const Message = styled.div`
      
    `

    return (
        <>
            <Header>
                <button>Покинуть чат</button>
            </Header>
            <MessageContainer>
                <Message>
                    <div>Вы</div>
                    <p>Lorem10</p>
                </Message>
            </MessageContainer>

        </>
    );
};

export default Body;