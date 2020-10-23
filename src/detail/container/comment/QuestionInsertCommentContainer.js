import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";
import generatedId from "../../module/IDGenerator";
import getToday from "../../module/GetToday";

@inject("Store")
@observer
class QuestionInsertCommentContainer extends Component {

    render() {

        const { login } = this.props;

        const onAddComment = (comment_body) => {
            // let comment = this.props.Store.detail.question_comment;
            console.log(comment_body)
            let comment = { 
                // ...comment,
                id: generatedId(5),
                date: getToday(),
                writer_id: "임시사용자",
                body : comment_body
            }
            this.props.Store.detail.addQuestionComment(comment);
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

export default QuestionInsertCommentContainer;
