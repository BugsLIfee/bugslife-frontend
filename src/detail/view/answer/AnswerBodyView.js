import React, { Component } from "react";
import "../scss/post.scss"

export default class AnswerBodyView extends Component {

    render() {
        const { answer } = this.props;

        return(
            <div>
                { answer.body }
            </div>
        )
    }
}
