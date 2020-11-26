import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";

@inject("Store")
@observer
class QuestionInsertCommentContainer extends Component {

    render() {

        const { questionId } = this.props;
        const { oauth } = this.props.Store;
        const login = oauth.getCurrentUserInfo.id !== undefined

        const onAddComment = (comment_body) => {
            let comment = { 
                questionId: questionId,
                writerId: oauth.getCurrentUserInfo.id,
                content : comment_body,
                writerName: oauth.getCurrentUserInfo.name,
                writerLevel: oauth.getCurrentUserInfo.level
            }
            this.props.Store.detail.addQuestionComment(comment);
        }

        return (
            <div>
                <InsertCommentView 
                    onAddComment = { onAddComment }
                    login = {login}
                    />
            </div>
        );
    }
}

export default QuestionInsertCommentContainer;
