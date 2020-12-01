import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CommentListView from "../../view/comment/CommentListView";

@inject("Store")
@observer
class AnswerCommentListContainer extends Component {

    componentDidMount() {
        this.props.Store.oauth.getUserList();
    }

    render() {

        const { answer } = this.props;
        const currentUserId = this.props.Store.oauth.getCurrentUserInfo.id
        const onDeleteComment = (id) => {
            this.props.Store.detail.onDeleteComment(id)
        }

        this.props.Store.detail.setAnswerId(answer.id);

        const comments = this.props.Store.detail._answer_comments;
        const userList = this.props.Store.oauth.userList;
        return (
            <div>
                <CommentListView 
                    comments={comments} 
                    currentUserId = {currentUserId} 
                    onDeleteComment={onDeleteComment}
                    userList = {userList} />
            </div>
        );
    }
}

export default AnswerCommentListContainer;
