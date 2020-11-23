import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CommentListView from "../../view/comment/CommentListView";

@inject("Store")
@observer
class QuestionCommentListContainer extends Component {

    render() {

        const comments = this.props.Store.detail._question_comments;
        const currentUserId = this.props.Store.oauth.getCurrentUserInfo.id;
        const onDeleteComment = (id) => {
            this.props.Store.detail.onDeleteComment(id)
        }

        return (
            <div>
                <CommentListView 
                    comments={comments}
                    currentUserId = {currentUserId}
                    onDeleteComment = {onDeleteComment}
                />
            </div>
        );
    }
}

export default QuestionCommentListContainer;
