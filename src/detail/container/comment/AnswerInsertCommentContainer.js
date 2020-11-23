import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";

@inject("Store")
@observer
class AnswerInsertCommentContainer extends Component {

    render() {

        const { answer } = this.props;
        const { oauth } = this.props.Store;
        const login = oauth.getCurrentUserInfo.id !== undefined;

        const onAddComment = (comment_body) => {
            let comment = { 
                content: comment_body,
                answerId: answer.id,
                writerId: oauth.getCurrentUserInfo.id,
                writerName: oauth.getCurrentUserInfo.name,
                writerLevel: oauth.getCurrentUserInfo.level
            }
            this.props.Store.detail.addAnswerComment(comment);
        }

        return (
            <div>
                <InsertCommentView 
                    onAddComment = { onAddComment }
                    login = { login }
                    />
            </div>
        );
    }
}

export default AnswerInsertCommentContainer;
