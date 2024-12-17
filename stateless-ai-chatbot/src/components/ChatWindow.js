import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage.js';

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;

`;
const ChatWindow = ({ messages }) => {
    const chatContainerRef = useRef(null);
    useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages])

    return (
    <ChatContainer ref={chatContainerRef}>
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
      ))}
        
    </ChatContainer>
    );
};

export default ChatWindow;
