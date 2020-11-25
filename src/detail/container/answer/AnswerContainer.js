import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import AnswerCommentListContainer from "../comment/AnswerCommentListContainer";
import AnswerInsertCommentContainer from "../comment/AnswerInsertCommentContainer";
import AnswerHeaderView from "../../view/answer/AnswerHeaderView";
import AnswerBodyView from "../../view/answer/AnswerBodyView";
import AnswerLikesContainer from "./AnswerLikesContainer";
import { Card } from "react-bootstrap";
import AnswerModifyView from "../../view/answer/AnswerModifyView";

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

        const { answer } = this.props;
        const onDeleteAnswer = (id) => {
            this.props.Store.detail.onDeleteAnswer(id);
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
                            onModifyAnswer = {onModifyAnswer}/>
                        <AnswerLikesContainer answer = { answer } currentUser = {currentUser}/> 
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
            :
            <AnswerModifyView answer = {answer} 
                onModifyAnswer = {onModifyAnswer} />
            }
            </>
        );
    }
}

export default AnswerContainer;
