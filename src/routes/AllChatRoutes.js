import React from "react";
import { Route } from "react-router-dom";
import DashboardPage from "../allChat/pages/DashboardPage";
import ChatroomPage from "../allChat/pages/ChatroomPage";
import io from "socket.io-client";
import makeToast from "../allChat/config/Toaster";
const AllChatRoutes = ({ match }) => {
  console.log("allchat router 왔어요?");


   const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("bugslife");//ACCESS_TOKEN
    if (token && !socket) {
      const newSocket = io("/api/allchat", {
        query: {
          token: localStorage.getItem("bugslife"),
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        makeToast("success", "Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Route exact path={`${match.url}/dashboard`}  render={() => <DashboardPage socket={socket} />}/>
      {/* <Route exact path={`${match.url}/login`} component={LoginPage} /> */}
      {/* <Route exact path={`${match.url}/register`} component={RegisterPage} /> */}
      <Route exact path={`${match.url}/chatroom/:id`} render={() => <ChatroomPage socket={socket} />}/>
  </>
  );
};
export default AllChatRoutes;