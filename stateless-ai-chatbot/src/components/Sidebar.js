import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button.js';
import { MdAdd, MdClear, MdCopyAll } from 'react-icons/md';

const SidebarContainer = styled.div`
    padding: 20px;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    min-width: 200px;
`;
const SidebarHeader = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;
const SidebarButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Sidebar = ({ onNewChat, onClearChat, onCopyChat }) => {
    return(
        <SidebarContainer>
            <SidebarHeader>Chat Options</SidebarHeader>
            <SidebarButtonContainer>
              <Button onClick={onNewChat}><MdAdd/> New Chat</Button>
              <Button onClick={onClearChat}><MdClear/> Clear Chat</Button>
              <Button onClick={onCopyChat}><MdCopyAll/> Copy Chat</Button>
            </SidebarButtonContainer>
        </SidebarContainer>
    );
};
export default Sidebar;
