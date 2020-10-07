import React, { Component } from "react";
import { Card, InputGroup, Button, FormControl} from "react-bootstrap";
import "../scss/post.scss"
import CommentListView from "../comment/CommentListView";
import LikesButtonView from "../LikesButtonView";


export default class AnswerView extends Component {

    render() {
        const { answer, onAnswerLike, login } = this.props;
        console.log("ANSWERView");
        return(
            <div class="answer post">
                <Card>
                    <Card.Header className="post_header">
                        <div class="post_meta">
                            <div class="writer_info"> 
                                <i class="fas fa-font answer_mark"></i>
                                <img src="../logo/logo_st.png" class="writer_icon" /> 
                                <div class="writer_info_text">
                                    <div class="writer_id"> {answer.writer_id} </div>
                                    <div class="writer_level"> {answer.writer_lv} </div>
                                </div>
                            </div>
                            <div className="post_info">
                                    <div class="upload_date"> {answer.date} &nbsp; | &nbsp; </div>
                                    <div class="report"> <a href="#"> <i class="fas fa-ban"></i> 신고 </a> </div>
                            </div>
                        </div>
                        <LikesButtonView answer={answer} onAnswerLike={onAnswerLike} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Text class="post_body">
                            { answer.body }
                        </Card.Text>
                        <hr />
                        <CommentListView comments = {answer.comments} />
                    </Card.Body>
                    <Card.Footer className="text-muted text-center post_footer">
                        { login === "false" && <p>댓글을 남기려면 <a href="#" >로그인</a> 해주세요.</p> }
                        { login === "true" &&
                            <InputGroup size="lg" className="input_comment">
                                <FormControl as="textarea" aria-label="With textarea Large" placeholder="댓글을 입력해주세요." />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" class="comment_bt">등록</Button>
                                    </InputGroup.Append>
                            </InputGroup>
                        }
                    </Card.Footer>
                </Card>
            </div>
        )
    }

}
