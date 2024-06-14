import React from 'react';

const MessageBlock = () => {
    return (
        <form>
            <input type="text" id={'messageInput'}/>
            <button>Отправить</button>
        </form>
    );
};

export default MessageBlock;