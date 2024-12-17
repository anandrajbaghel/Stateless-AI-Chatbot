import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './UI/Input.js';
import Button from './UI/Button.js';
import { MdSend } from 'react-icons/md';

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;
`;
const InputWrapper = styled.div`
  flex-grow: 1;
`;

const ChatInput = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          handleSendMessage();
      }
  }

  return (
    <InputContainer>
      <InputWrapper>
      <Input
        type="text"
        value={inputMessage}
        onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      </InputWrapper>
      <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
        <MdSend />
      </Button>
    </InputContainer>
  );
};

export default ChatInput;
