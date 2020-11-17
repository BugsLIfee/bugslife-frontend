import { Observer } from 'mobx-react';
import React, { Component } from 'react';
import ChatUser from '../view/ChatUser';


@Observer('Store')
class ChatUserContainer extends Component {
    render() {

        return (
            <div>
                <ChatUser/>
            </div>
        );
    }
}

export default ChatUserContainer;