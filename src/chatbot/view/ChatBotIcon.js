import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import ChatbotContainer from '../container/ChatbotContainer';

class ChatBotIcon extends Component {
    render() {
        return (
            <Modal>
                <ChatbotContainer/>
            </Modal>
        );
    }
}

export default ChatBotIcon;