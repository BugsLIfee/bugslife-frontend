import React, { Component } from 'react';

class ChatRoomCreate extends Component {
    render() {
        return (
            <div>
                <legend>채팅방 생성</legend>
                <form action="/room" method="post">
                    <div>
                        <input name="title" placeholder="방 제목"/>
                    </div>
                    <div>
                        <input name="max" type="number" placeholder="수용 인원(최소 2명)" min="2" value="10"/>
                    </div>
                    <div>
                        <input name="password" type="password" placeholder="비밀번호(없으면 공개방)"/>
                    </div>
                    <div>
                        <button type="submit">생성</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChatRoomCreate;