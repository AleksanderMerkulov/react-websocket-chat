import React from 'react';
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  & input{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  & button{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    
    cursor: pointer;
  }
  
`

const Button = styled.button`
  background: #c4c4fd;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 15px;

`

const MessageBlock = () => {
    return (
        <Form>
            <input type="text" id={'messageInput'}/>
            <Button>Отправить</Button>
        </Form>
    );
};

export default MessageBlock;