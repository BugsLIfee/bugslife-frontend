import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertCommentView from "../../view/comment/InsertCommentView";

@inject("Store")
@observer
class InsertCommentContainer extends Component {

    render() {

        const { login } = this.props;

        return (
            <div>
                <InsertCommentView login = { login } />
            </div>
        );
    }
}

export default InsertCommentContainer;
