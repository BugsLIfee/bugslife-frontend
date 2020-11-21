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
        const { oauth } = this.props.Store;
        const onAddPost = (postObj) => {
            postObj.writer = oauth.getCurrentUserInfo.id;
            bugBoardPosting.onAddPost(postObj);
        }
        return (
            <div>
                <PostingView onAddPost={onAddPost} />
            </div>
        );
    }
}

export default PostingContainer;