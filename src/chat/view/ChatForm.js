import React, { Component } from 'react';

class ChatForm extends Component {
    render() {
        return (
            <form id="chat-form" action="/chat" method="post" enctype="multipart/form-data">
                <label for="gif">GIF 올리기</label>
                <input id="gif" type="file" name="gif" accept="image/gif"/>
                <input id="chat" name="chat"/>
                <button type="submit">전송</button>
            </form>
        );
    }
}

export default ChatForm;