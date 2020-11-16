import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";

@inject("Store")
@observer
class AnswerInsertCommentContainer extends Component {

    render() {

        const {  answer } = this.props;

        const onAddComment = (comment_body) => {
            // let comment = this.props.Store.detail.question_comment;
            let comment = { 
                content: comment_body,
                answerId: answer.id,
                writer: "임시사용자",
            }
            this.props.Store.detail.addAnswerComment(comment);
        }

        return (
            <div>
                <InsertCommentView 
                    onAddComment = { onAddComment }
                    />
            </div>
        );
    }
}

export default AnswerInsertCommentContainer;
