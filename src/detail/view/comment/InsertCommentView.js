import React, { Component } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import "../scss/comment.scss"

export default class InsertCommentView extends Component {
    
    render() {
        
        const { onAddComment } = this.props;

        const onClickButton = (body) => {
            onAddComment(body);
            document.getElementById("question_comment_insert_form").value='';
        }
        
        let comment_body; 
        return(
            <div>
                {/* { login === "false" ?  <p>댓글을 남기려면 <a href="/" >로그인</a> 해주세요.</p> : */}
                    <InputGroup size="lg" className="input_comment">
                        <FormControl 
                            id="question_comment_insert_form"
                            as="textarea" 
                            aria-label="With textarea Large" 
                            placeholder="댓글을 입력해주세요." 
                            onChange = {(e) => { comment_body = (e.target.value)}}
                        />
                            <InputGroup.Append>
                                <Button 
                                    variant="outline-secondary" 
                                    className="comment_bt"
                                    onClick={()=>onClickButton(comment_body)}
                                >등록
                                </Button>
                            </InputGroup.Append>
                    </InputGroup>
                {/* } */}
            </div>
        )
    }
}
