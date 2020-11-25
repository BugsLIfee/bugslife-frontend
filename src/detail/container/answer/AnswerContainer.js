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


        const onOpenChat=(questionId,questionUserId, answerUserId)=>{
           console.log("질문id:",questionId,"/채팅요청한 질문자id:",questionUserId,"/답변자Id:",answerUserId); 
           const url=`/premium-chat?questionId=${questionId}&questionUserId=${questionUserId}&answerUserId=${answerUserId}`;
           const popup_option="toolbar=no,status=no,menubar=no,resizable=yes, location=no, top=100,left=100,width=500,height=700,scrollbars=no, fullscreen=no";

           window.open(url,'프리미엄채팅방',popup_option);

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
                           />
                        <AnswerLikesContainer answer = { answer } currentUser = {currentUser}/> 
                    </div>
                    <hr />
                    <AnswerSelectView answer={answer} question={question} user={user} onSelectAnswer={onSelectAnswer}  onOpenChat={onOpenChat}/>
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
