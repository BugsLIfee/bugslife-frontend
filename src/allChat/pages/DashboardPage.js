import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DashboardPage = (props) => {
  const chatroomMaxRef = React.createRef();
  const chatroomNameRef = React.createRef();

  const [chatrooms, setChatrooms] = React.useState([]);


  const createChatroom = ()=>{
    const chatroomName = chatroomNameRef.current.value;
    const chatroomMax = chatroomMaxRef.current.value;

     axios
      .post("/api/allchat/chatroom", {
        headers: {
          Authorization: localStorage.getItem("bugslife"),
        },
        body:{
          chatroomName,
          chatroomMax,
        }
      })
      .then((response) => {
        swal("완료","채팅방이 생성되었습니다.","success")
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  }
  const getChatrooms = () => {
    axios
      .get("http://localhost:8086/chatroom", {
        headers: {
          Authorization: localStorage.getItem("bugslife"),
        },
      })
      .then((response) => {
        setChatrooms(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };

  React.useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <div className="cardHeader">채팅방 목록</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">채팅방이름</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="채팅방이름을 입력하세요"
            ref={chatroomNameRef}
          />
        </div>
      </div>
      <button>채팅방만들기</button>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom">
            <div>{chatroom.name}</div>
            <Link to={"/chatroom?id=" + chatroom._id}>
              <div className="join">참가</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
