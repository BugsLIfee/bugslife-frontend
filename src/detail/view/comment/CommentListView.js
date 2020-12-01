import React, {Component} from 'react';
import CommentView from './CommentView';

export default class CommentListView extends Component {
    render() {
        
        const { comments, currentUserId, onDeleteComment, userList} = this.props; 

        const commentList = comments.map((comment) => {
            const user = userList.find(user => {
                return user.id === comment.writerId
            })
            return (
                <CommentView 
                    comment={comment}   
                    key={comment.id}
                    currentUserId = {currentUserId}
                    onDeleteComment = {onDeleteComment}
                    user = {user}
                /> 
            )
        });
        
        return (
            <div className="bugboard_commentList">
                {commentList}
            </div>
        );
    }
}
