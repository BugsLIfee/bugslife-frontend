import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CommentListView from "../../view/comment/CommentListView";

@inject("Store")
@observer
class AnswerCommentListContainer extends Component {

    render() {

        const { comments } = this.props;

        return (
            <div>
                <CommentListView comments={comments} />
            </div>
        );
    }
}

export default AnswerCommentListContainer;
