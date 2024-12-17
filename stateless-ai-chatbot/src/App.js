import React, { useState } from 'react';
import styled from 'styled-components';
import ChatInput from './library/medAi/components/ChatInput.js';
import ChatWindow from './library/medAi/components/ChatWindow.js';
import Sidebar from './library/medAi/components/Sidebar.js';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Disclaimer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  font-size: 0.8rem;
  text-align: center;
  color: #888;
`

const App = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
      try {
        const response = await fetch('http://localhost:3001/api/chat', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message }),
          });
          const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.error || "Something went wrong");
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response, isUser: false },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: `Error: ${error.message}`, isUser: false },
        ]);
      }
  };

  const handleNewChat = () => {
    setMessages([]);
  };
  const handleClearChat = () => {
    setMessages([]);
  };
    const handleCopyChat = () => {
        const chatText = messages.map((msg) => `${msg.isUser ? 'You' : 'Bot'}: ${msg.text}`).join('\n');
        navigator.clipboard.writeText(chatText).then(() => {
            alert('Chat copied to clipboard!');
        }).catch(err => {
            console.error('Error copying text:', err);
        });
    }
    return (
        <AppContainer>
            <Sidebar onNewChat={handleNewChat} onClearChat={handleClearChat} onCopyChat={handleCopyChat} />
            <MainContent>
                <ChatWindow messages={messages} />
                <ChatInput onSendMessage={handleSendMessage} />
                <Disclaimer> Disclaimer: This application is for educational purpose only. </Disclaimer>
            </MainContent>
        </AppContainer>
  );
};

export default App;
