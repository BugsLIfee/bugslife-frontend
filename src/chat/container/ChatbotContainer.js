import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Button, Modal } from 'semantic-ui-react';

//import styled from 'styled-components'
function ChatbotContainer () {
        
        const steps = [
      {
        id: '1',
        message: '개발기간이 1년 미만이신가요?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: '1년미만', trigger: '3' },
          { value: 2, label: '1년이상', trigger: '4' },
        ],
  
      },
      {
        id: '3',
        message: '개발 꿈나무시군요! 어떤 언어를 주로 쓰시나요?',
        trigger:'5'
      },
      {id:'5',
        options: [
          { value: 'java', label: 'java', trigger: '6' },
          { value: 'c++', label: 'c++', trigger: '6' },
          { value: 'python', label: 'python', trigger: '6' },
          { value: 'javascript', label: 'javascript', trigger: '6' },
        ],
 
      },
      {
        id: '4',
        message: '이제 막 꿈나무에서 주니어가 되셨군요 ! !',
      },
      {
        id: '6',
        message: '오호! {previousValue}를 쓰시는군요!',
        end: true,
      },
        ];

        const [open, setOpen] = React.useState(false);
        return (
  
    <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(
            <div id="chatbot_box" >
            <img id="chatbot_icon" src="../../chat/chatBotButton.png" alt="chatboticon"/>
            </div>)}
    >
    <Modal.Actions>
    <Button color='white' onClick={() => setOpen(false)} icon="close"></Button>
    </Modal.Actions>
      <Modal.Content>
          <ChatBot style={{margin: "0"}}
            headerTitle="벅스라이프 챗봇입니다."
            recognitionEnable={true}
            steps={steps}
          />
          </Modal.Content>
    </Modal>
        );
    
}

export default ChatbotContainer;