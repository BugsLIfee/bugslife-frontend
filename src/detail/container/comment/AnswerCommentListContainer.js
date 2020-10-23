import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CommentListView from "../../view/comment/CommentListView";

@inject("Store")
@observer
class AnswerCommentListContainer extends Component {

    render() {

        const { answer } = this.props;

        this.props.Store.detail.setAnswerId(answer.id);

        const comments = this.props.Store.detail._answer_comments;
        
        return (
            <div>
                <CommentListView comments={comments} />
            </div>
        );
    }
}

export default AnswerCommentListContainer;
