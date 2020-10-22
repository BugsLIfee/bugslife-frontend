import React, { Component } from "react";
import "../scss/post.scss"
import marked from "marked";
import { Card } from "react-bootstrap";
import { Label } from "semantic-ui-react";

export default class QuestionBodyView extends Component {

    render() {
        
        const { question }= this.props;

        const md_text = marked( question.body );

        const createMarkup = function() {
            return { __html: md_text};
        }

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
                <Card.Text class="post_body">
                    { question.markDown===false ?  question.body :
                        <div dangerouslySetInnerHTML = {createMarkup()} />}
                </Card.Text>
                <div className="hash_tags">
                    {tags}
                </div>
            </div>
        )
    }
}
