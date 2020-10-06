import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import PostingView from "../view/PostingView"

@withRouter
@inject('Store')
@observer
class PostingContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            tags : ["javascript", "C++"]
        }
    }

    render() {
        const { tags } = this.state;
        const onInsertTag = (tag) => {
            this.setState({
                tags : tags.concat(tag)    
            });
        }

        return (
            <div>
                <PostingView tags={tags} onInsertTag={onInsertTag} />
            </div>
        );
    }
}

export default PostingContainer;