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
        message: '이제 막 꿈나무에서 주니어가 되셨군요 ! 집중하고 있는 포지션은 무엇인가요?',
        trigger: '7'
      },
      {
        id: '6',
        message: '오호! {previousValue}를 쓰시는군요! 관심있는 분야가 있나요?' ,
        trigger: '13'
      },
      {
        id: '7',
        options: [
          { value: '프론트엔드', label: '프론트엔드', trigger: '8' },
          { value: '백엔드', label: '백엔드', trigger: '8' },
          { value: '데브옵스', label: '데브옵스', trigger: '8' },
        ],
      },
      {
        id: '8',
        message: ' {previousValue}에서 더 배우고 싶은 기술이 있나요? 아래에 입력해주세요',
        trigger : '9'
      },
      {
        id: '9',
        user: true,
        validator: (value) => {
          if (!isNaN(value)) {
            return '그게뭔지 잘 모르겠어요';
          }
          return true;
        },
        trigger: '10',
      },
      {
        id: '10',
        message: "{previousValue}에 대한 교육들을 알아보시겠어요?",
        trigger: '11'
      },
      {
        id: '11',
        options: [
          { value: '좋아요', label: '좋아요', trigger: '12' },
          { value: '나중에요', label: '나중에요', trigger: '12' },
        ],
      },
      {
        id: '12',
        component: (
          <div> <a href="/edu">교육과정 보러 가기</a> </div>
        ),
        end:true
      },
      {
        id: '13',
        options:[
          {value: "네", label: '네', trigger:'7'},
          {value: "아직 모르겠어요", label: '아직 모르겠어요.', trigger:'15'}
        ]
      },
      {
        id:'15',
        message:'어느 분야에 끌리는지 테스트 해볼까요?',
        trigger: '16'
      },{
        id : '16',    
        options: [
          { value: '좋아요', label: '좋아요', trigger: '17' },
          { value: '나중에요', label: '나중에요', trigger: '20' },
        ],
      }, 
      {
        id: '17',
        message :"여기까지",
        end:true
      },
      {
        id:'20',
        message: "더 궁금한 점 있으세요?",
        end: true
      }

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