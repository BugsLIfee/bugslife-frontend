import React from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";
import io from "socket.io-client";
import makeToast from "../config/Toaster";


const ChatroomPage = (props) => {
  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    // const token = localStorage.getItem("bugslife");//ACCESS_TOKEN
    if (!socket) {
      const newSocket = io("http://localhost:8085",{path:"/socket.io"});

      setSocket(newSocket);
  }
  }

  // React.useEffect(() => {
  //   setupSocket();
  //   //eslint-disable-next-line
  // }, []);


   console.log("socket?,",socket);
  
 const {location} = props;
  const searchObj = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const {questionId, questionUserId, answerUserId,nowUserId} =searchObj;
  console.log("chatroompage 입니다.",searchObj);
  console.log("user:",nowUserId);
  const chatroomId = searchObj.questionId;
  const [messages, setMessages] = React.useState([]);
  const messageRef = React.useRef();
  const userId = nowUserId;


  
  
  const sendMessage = () => {
    console.log("전송버튼 눌렀나요? socket:",socket)
    if (socket) {
      console.log("message:", chatroomId, userId, messageRef.current.value,);
        socket.emit("chatroomMessage", {
          chatroomId: chatroomId,
          user: userId,
          message: messageRef.current.value,
        });
        messageRef.current.value = "";

    }

    // if (props.socket) {
    //   socket.on("newMessage", (message) => {
    //     console.log("newMessage----" , message);
    //     const newMessages = [...messages, message];
    //     setMessages(newMessages);
    //   });
    // }

  }
 
  
  React.useEffect(() => {
   
    console.log(" newmessage useEffect---", socket);
    if (socket) {
      console.log(" newmessage useEffect if---", socket);
      socket.on("newMessage", (message) => {
        console.log("newMessage--socket on---" , message);
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }

    //eslint-disable-next-line
  }, [messages]);



  // React.useEffect(() => {
  //    setupSocket();
  //   if (socket) {
  //     console.log("joinroom호출=======");
  //     socket.emit("joinRoom", {
  //       chatroomId,
  //     });
  //   }
  //   return () => {
  //     //Component Unmount
  //     if (socket) {
  //       socket.emit("leaveRoom", {
  //         chatroomId,
  //       });
  //     }
  //   };
  //   //eslint-disable-next-line
  // }, []);


  
  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        {/* <div className="cardHeader">모두의 채팅방</div> */}
        <div className="chatroomContent">
          {messages.map((message, i) => (
            <div key={i} className="message">
              <span
                className={
                  userId === message.userId ? "ownMessage" : "otherMessage"
                }
              >
                {message.name}:
              </span>{" "}
              {message.message}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="메세지 입력"
              ref={messageRef}
            />
          </div>
          <div>
            <button className="join" onClick={sendMessage}>
              전송
            </button>

          </div>
        </div>
      </div>
   
    </div>
  );
};

export default withRouter(ChatroomPage);
