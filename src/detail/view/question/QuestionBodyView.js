import React, { Component } from "react";
import "../scss/post.scss"
import { Label } from "semantic-ui-react";
export default class QuestionBodyView extends Component {

    render() {
        
        const { question }= this.props;

        const tags = question.tags.map(tag => {
            return (
                <span>
                    <Label color='teal' size="big">
                        {tag}
                    </Label>
                    {' '}
                </span>
            );
        })

        return(
            <div>
                <div className="post_body">
                    <div dangerouslySetInnerHTML = {{__html: question.content}} />
                </div>
                <div className="hash_tags">
                    {tags}
                </div>
            </div>
        )
    }
}
