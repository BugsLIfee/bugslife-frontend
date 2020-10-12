import React, {Component} from 'react';
import CommentView from './CommentView';

export default class CommentListView extends Component {
    render() {
        
        const { comments } = this.props; 
        const commentList = comments.map(comment => {
            return (
                <CommentView 
                    comment={comment}   
                /> 
            )
        });
        
        return (
            commentList
        );
    }
}
