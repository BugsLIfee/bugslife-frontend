import React, { Component } from 'react';
import "./chatbotIcon.scss";
import ChatBot from 'react-simple-chatbot';
import { Modal } from 'semantic-ui-react';
class ChatBotView extends Component {

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
            trigger: '2',
          },
          {
            id: '100',
            message: '감사합니다!!',
            end: true,
          },
        ];
        const openChatbot=()=>{
       
           return ( 
               <Modal>
                   <ChatBot steps={steps}/>
               </Modal>
           );
        }
        return (
            <div onClick={()=>openChatbot()} id="chatbot_box" >
                <img id="chatbot_icon" src="/logo/logo_st.png" alt="chatboticon"/>
            </div>
        );
    }
}

export default ChatBotView;