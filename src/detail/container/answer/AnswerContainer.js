import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerCommentListContainer from "../comment/AnswerCommentListContainer";
import AnswerInsertCommentContainer from "../comment/AnswerInsertCommentContainer";
import AnswerHeaderView from "../../view/answer/AnswerHeaderView";
import AnswerBodyView from "../../view/answer/AnswerBodyView";
import AnswerLikesContainer from "./AnswerLikesContainer";
import { Card } from "react-bootstrap";
import PrivateChatContainer from "../../../chat/container/PrivateChatContainer";

@inject("Store")
@observer
class AnswerContainer extends Component {

    render() {

        const { answer } = this.props;
        const onDeleteAnswer = (id) => {
            this.props.Store.detail.onDeleteAnswer(id);
        }

        const onOpenChat=(partnerId, myId)=>{
           console.log("채팅대상자:",partnerId,"/요청자:",myId); 
        //   window.open(`/admin/info-list`);
          //   window.open(`/freeboard`);
           window.open(`/private-chat?partnerId=${partnerId}&myId=${myId}`);
        }
        const currentUserId = this.props.Store.oauth.getCurrentUserInfo.id;
        return (
            <div className="answer post">
                <Card>
                    <div className="post_header">
                        <AnswerHeaderView answer = {answer} currentUserId = {currentUserId} onDeleteAnswer= {onDeleteAnswer} onOpenChat={onOpenChat}/>
                        <AnswerLikesContainer answer = { answer } currentUserId = {currentUserId}/> 
                    </div>
                    <hr />
                    <Card.Body>
                        <div className="post_body">
                            <AnswerBodyView answer = {answer} />
                        </div>
                    </Card.Body>
                    <hr />

                    <Card.Footer className="text-muted text-center post_footer">
                        <AnswerCommentListContainer answer = {answer} />
                        <AnswerInsertCommentContainer answer = {answer} />
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default AnswerContainer;
