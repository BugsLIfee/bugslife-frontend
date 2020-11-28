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
          { value: '나중에요', label: '나중에요', trigger: '20' },
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
        message :"당신이 개발한 서비스 사용자가 했으면 좋겠는 말은?",
        trigger:'25'
      },
      {
        id:'20',
        message: "더 궁금한 점 있으세요?",
        trigger:"21"
      },
      {
        id:'21',
        options: [
          { value: '네', label: '네', trigger: '23' },
          { value: '아니요', label: '아니요', trigger: '22' },
        ],
      },
      {
        id: '22',
        message: "그럼 벅스라이프에서 즐거운 시간 보내세요!",
        end: true
      },
      {
        id: '23',
        message: '더 궁금하신 사항은 1:1문의로 남겨주세요.',
        trigger: '24'
      },
      {   
        id: '24',
        component: (
        <div> <a href="/contact/qna-write">1:1 채팅 문의</a> </div>
        ),
        end:true
      },
      {
        id : '25',
        options: [
          { value: '와 진짜 감각적이다.', label: '와 진짜 감각적이다.', trigger: '26' },
          { value: '이렇게 안정적인 서비스라니!', label: '이렇게 안정적인 서비스라니!', trigger: '27' },
        ],
      },
      {
        id: '26',
        message: "사용자가 편하고 즐겁게 사용할 수 있는 화면을 만드는 '프론트엔드' 개발자가 적성에 맞아보여요! ",
        end: true
      },
      {
        id: '27',
        message: "서비스의 성능과 안정성을 담당하는 든든한 '백엔드' 개발자가 적성에 맞아보여요! " ,
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