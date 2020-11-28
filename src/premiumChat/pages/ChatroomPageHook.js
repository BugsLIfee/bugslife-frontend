import React from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";

const ChatroomPage = (props) => {

  console.log("props받아오나요?,",props);
  
  const {socket,location} = props;
  const searchObj = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const {nowUserId} =searchObj;
  console.log("chatroompage 입니다.",searchObj);
  console.log("user:",nowUserId);
  const chatroomId = searchObj.questionId;
  const [messages, setMessages] = React.useState([]);
  const messageRef = React.useRef();
  const userId = nowUserId;
  
  
  
  const sendMessage = () => {
  console.log("전송버튼 눌렀나요?")

  console.log("socket:", socket);
  if (socket) {
    console.log("message:", chatroomId, userId, messageRef.current.value,);
      socket.emit("chatroomMessage", {
        chatroomId: chatroomId,
        user: userId,
        message: messageRef.current.value,
      });
      messageRef.current.value = "";
    }
  };


  
  // React.useEffect(() => {

    console.log("여기에 소켓있냐고", socket);

    if (socket) {
      socket.on("newMessage", (message) => {
        console.log("newMessage" , message);
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
  // }, []);

  React.useEffect(() => {
    console.log("joinroom호출=======");
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }
    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    //eslint-disable-next-line
  }, []);


  
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
