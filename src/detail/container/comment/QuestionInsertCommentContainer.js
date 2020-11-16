import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";
import generatedId from "../../module/IDGenerator";
import getToday from "../../module/GetToday";

@inject("Store")
@observer
class QuestionInsertCommentContainer extends Component {

    render() {

        const { questionId } = this.props;

        const onAddComment = (comment_body) => {
            // let comment = this.props.Store.detail.question_comment;
            console.log(comment_body)
            let comment = { 
                questionId: questionId,
                writer: "임시사용자",
                content : comment_body
            }
            this.props.Store.detail.addQuestionComment(comment);
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

export default QuestionInsertCommentContainer;
