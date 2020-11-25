import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import ChatRoomPage from '../../allChat/pages/ChatroomPage'

@withRouter
class PrivateChatContainer extends Component {
    
    render() {
        console.log("도착하나요...");
          const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
        const {partnerId, myId} = searchObj;
        console.log("searchObj",searchObj);
        return (
            <div>
                <ChatRoomPage searchObj={searchObj} />
               partnerId : {partnerId}, myId : {myId}
            </div>
        );
    }
}

export default PrivateChatContainer;