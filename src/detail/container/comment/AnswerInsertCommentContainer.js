import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";
import generatedId from "../../module/IDGenerator";
import getToday from "../../module/GetToday";

@inject("Store")
@observer
class AnswerInsertCommentContainer extends Component {

    render() {

        const { login, answer } = this.props;

        const onAddComment = (comment_body) => {
            // let comment = this.props.Store.detail.question_comment;
            let comment = { 
                // ...comment,
                body: comment_body,
                id: generatedId(5),
                date: getToday(),
                writer_id: "임시사용자",
            }
            this.props.Store.detail.addAnswerComment(answer.id, comment);
        }

        return (
            <div>
                <InsertCommentView 
                    login = { login } 
                    onAddComment = { onAddComment }
                    />
            </div>
        );
    }
}

export default AnswerInsertCommentContainer;
