import React from 'react';
import styled, {css} from "styled-components";

const Header = styled.div`
        
    `
const MessageContainer = styled.div`
        
    `

const Message = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  padding: 10px;

  width: 80%;
  margin-left: ${props => props.toMe ? 'auto' : '0'};
  margin-bottom: 10px;

  background: antiquewhite;

  & .message-name {
    padding-bottom: 2px;
    border-bottom: 1px solid #a9a9a9;
  }
`

const Body = () => {



    return (
        <>
            <Header>
                <button>Покинуть чат</button>
            </Header>
            <MessageContainer>
                <Message>
                    <div className={'message-name'}>Вы</div>
                    <p>Решение заключается в том, чтобы вынести стилизованные компоненты за пределы компонента Home. Это предотвратит их переопределение при каждом рендере.</p>
                </Message>
                <Message toMe>
                    <div className={'message-name'}>Dimoooon</div>
                    <p>Проблема с вводом данных в input может возникать из-за того, что компонент Form переопределяется при каждом рендере. Это может приводить к потере фокуса на элементе ввода.</p>
                </Message>

            </MessageContainer>

        </>
    );
};

export default Body;