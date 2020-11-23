import React, {Component} from 'react';
import CommentView from './CommentView';

export default class CommentListView extends Component {
    render() {
        
        const { comments, currentUserId, onDeleteComment} = this.props; 
        const commentList = comments.map((comment) => {
            return (
                <CommentView 
                    comment={comment}   
                    key={comment.id}
                    currentUserId = {currentUserId}
                    onDeleteComment = {onDeleteComment}
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
