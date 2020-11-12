import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
//import styled from 'styled-components'
class ChatbotContainer extends Component {
    render() {
        
        const steps = [
          {
            id: '0',
            message: '벅스라이프에 오신것을 환영합니다. ',
            trigger: '1',
          },
          {
            id: '1',
            message: '어떤것을 문의하고 싶으신가요? ',
            trigger: '1',
          },
          {
            id: '100',
            message: '감사합니다!!',
            end: true,
          },
        ];
        console.log("chatbot")
        return (
            <div>
                chatcontainer
                <ChatBot steps={steps}/>
            </div>
        );
    }
}

export default ChatbotContainer;