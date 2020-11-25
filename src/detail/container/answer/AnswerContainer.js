import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerCommentListContainer from "../comment/AnswerCommentListContainer";
import AnswerInsertCommentContainer from "../comment/AnswerInsertCommentContainer";
import AnswerHeaderView from "../../view/answer/AnswerHeaderView";
import AnswerBodyView from "../../view/answer/AnswerBodyView";
import AnswerLikesContainer from "./AnswerLikesContainer";
import { Card } from "react-bootstrap";
import PrivateChatContainer from "../../../chat/container/PrivateChatContainer";
import AnswerModifyView from "../../view/answer/AnswerModifyView";
import AnswerSelectView from "../../view/answer/AnswerSelectView";


@inject("Store")
@observer
class AnswerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modifyState: false
        }
    }

    render() {

        const question = this.props.Store.detail._question;
        const user = this.props.Store.oauth.getCurrentUserInfo;

        const { answer } = this.props;

        const onSelectAnswer = (id) => {
            this.props.Store.detail.onSelectAnswer(id);
        }

        const onDeleteAnswer = (id) => {
            this.props.Store.detail.onDeleteAnswer(id);
        }


        const onOpenChat=(partnerId, myId)=>{
           console.log("채팅대상자:",partnerId,"/요청자:",myId); 
        //   window.open(`/admin/info-list`);
          //   window.open(`/freeboard`);
           window.open(`/private-chat?partnerId=${partnerId}&myId=${myId}`);
        }

        const onModifyAnswer = (answerObj) => {
            this.setState({modifyState: !this.state.modifyState});
            this.props.Store.detail.onModifyAnswer(answerObj);
        }

        const currentUser = this.props.Store.oauth.getCurrentUserInfo;


        return (
            <>
            {
            this.state.modifyState === false ? 
            <div className="answer post">
                <Card>
                    <div className="post_header">
                        <AnswerHeaderView answer = {answer} 
                            currentUser = {currentUser} 
                            onDeleteAnswer= {onDeleteAnswer}
                            onModifyAnswer = {onModifyAnswer}
                            onOpenChat={onOpenChat}/>
                        <AnswerLikesContainer answer = { answer } currentUser = {currentUser}/> 
                    </div>
                    <hr />
                    <AnswerSelectView answer={answer} question={question} user={user} onSelectAnswer={onSelectAnswer}/>
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
            :
            <AnswerModifyView answer = {answer} 
                onModifyAnswer = {onModifyAnswer} />
            }
            </>
        );
    }
}

export default AnswerContainer;
