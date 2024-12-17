import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

const MessageContainer = styled.div`
    margin-bottom: 10px;
    align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
    background-color: ${props => props.isUser ? '#DCF8C6' : '#ECECEC'};
    padding: 0px 24px;
    border-radius: 16px;
    max-width: 70%;
`;

const ChatMessage = ({ message, isUser }) => {
    return (
        <MessageContainer isUser={isUser}>
            <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                children={message}
            />
        </MessageContainer>
    );
};

export default ChatMessage;
