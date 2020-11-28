import axios from "axios";
import {CHAT_API_URL} from "../../oauth/constants/index";
import {request} from "../../oauth/api/APIUtils";

export function createPremiumChatroom (questionId,questionUserId, answerUserId) {
  const chatroomModel={
    chatroomId: questionId,
    questionId: questionId,
    questionUserId: questionUserId,
    answerUserId: answerUserId,
  }
  console.log("chatroomModel:",chatroomModel)
  return request({
          url: "http://localhost:8085/chatroom/create",
          method: 'POST',
          body: JSON.stringify(chatroomModel)
      });

};
//   React.useEffect(() => {
//     getChatrooms();
//     // eslint-disable-next-line
//   }, []);

// {chatrooms.map((chatroom) => (
//     <div key={chatroom._id} className="chatroom">
//     <div>{chatroom.name}</div>
//     <Link to={"/chatroom/" + chatroom._id}>
//         <div className="join">Join</div>
//     </Link>
//     </div>
// ))} 
