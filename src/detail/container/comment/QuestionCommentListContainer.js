import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CommentListView from "../../view/comment/CommentListView";

@inject("Store")
@observer
class QuestionCommentListContainer extends Component {

    render() {

        const comments = this.props.Store.detail._question_comments;

        return (
            <div>
                <CommentListView 
                    comments={comments}
                />
            </div>
        );
    }
}

export default QuestionCommentListContainer;
