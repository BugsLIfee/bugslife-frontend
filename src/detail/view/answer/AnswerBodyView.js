import React, { Component } from "react";
import "../scss/post.scss"

export default class AnswerBodyView extends Component {

    render() {
        const { answer } = this.props;
        const answer_body = { __html: answer.content };
        return(
            <div>
                <div dangerouslySetInnerHTML = {answer_body} />
            </div>
        )
    }
}
