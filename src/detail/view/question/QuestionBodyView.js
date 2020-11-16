import React, { Component } from "react";
import "../scss/post.scss"
import marked from "marked";
import { Card } from "react-bootstrap";
import { Label } from "semantic-ui-react";
export default class QuestionBodyView extends Component {

    render() {
        
        console.log("바디찍히니?")
        const { question }= this.props;

        const md_text = marked( question.content );

        const createMarkup = function() {
            console.log(typeof(question.content))
            return { __html: question.content };
        }
        console.log(createMarkup())


        const tags = (
        <span> 
            <Label color='teal' size="big">
                C++
            </Label>
            {' '}
        </span>)
        // const tags = question.tags.map(tag => {
        //     return (
        //         <span>
        //             <Label color='teal' size="big">
        //                 {tag}
        //             </Label>
        //             {' '}
        //         </span>
        //     );
        // })
        // const tags= (<span>Test</span>)

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
