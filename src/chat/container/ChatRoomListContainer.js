import React, { Component } from 'react';

class ChatRoomListContainer extends Component {
    
    render() {



        return (
            <div>
                <h1>GIF 채팅방</h1>
                <fieldset>
                    <legend>채팅방 목록</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>방 제목</th>
                                <th>종류</th>
                                <th>허용 인원</th>
                                <th>방장</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-id="5fb24dc6938105463093b385">
                                <td>노드질문방</td>
                                <td>공개방</td>
                                <td>10</td>
                                <td>#40bfa6</td>
                                <td>
                                    <button class="join-btn" data-password="false" data-id="5fb24dc6938105463093b385">
                                        입장
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
                <div class="error-message">  </div>
                <a href="/room">
                    채팅방 생성
                </a>
            </div>  
        );
    }
}

export default ChatRoomListContainer;