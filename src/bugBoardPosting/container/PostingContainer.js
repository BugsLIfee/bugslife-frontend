import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import PostingView from "../view/PostingView"

@withRouter
@inject('Store')
@observer
class PostingContainer extends Component {
    
    render() {

        const { bugBoardPosting } = this.props.Store;
        const { user } = this.props.Store;
        const onAddPost = (postObj) => {
            bugBoardPosting.onAddPost(postObj);
        }

        return (
            <div>
                <PostingView onAddPost={onAddPost} user={user}/>
            </div>
        );
    }
}

export default PostingContainer;