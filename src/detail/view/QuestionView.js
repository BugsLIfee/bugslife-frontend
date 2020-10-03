import React, { Component } from "react";
import { Card, Badge, InputGroup, FormControl, Button} from "react-bootstrap";
import "./scss/post.scss"
import CommentListView from "./CommentListView";
import marked from "marked";

export default class QuestionView extends Component {

    render() {

        const { question } = this.props;
        const { login } = this.props;
        const md_text = marked( question.body );

        const createMarkup = function() {
            return { __html: md_text};
        }

        const tags = question.tags.map(tag => {
            return (
                <span>
                    <Badge variant="info">
                        {tag}
                    </Badge>
                    {' '}
                </span>
            );
        })

        return(
            <div class="question post">
                <Card>
                    <Card.Header class="post_header">
                        <div class="post_meta">
                            <div class="question_title">
                                <i class="fab fa-quora question_mark"></i> 
                                {' ' + question.title}
                            </div>
                            <div class="writer_info"> 
                                <img src="../logo/logo_st.png" class="writer_icon" /> 
                                <div class="writer_info_text">
                                    <div class="writer_id">{question.writer_id}</div>
                                    <div class="writer_level">{question.writer_lv} </div>
                                </div>
                            </div>
                            <div className="post_info">
                                    <div class="upload_date"> {question.date} &nbsp; | &nbsp; </div>
                                    <div class="views"> 조회수 {question.views}  &nbsp; | &nbsp; </div>
                                    <div class="report"> <a href="#"> <i class="fas fa-ban"></i> 신고 </a> </div>
                            </div>
                        </div>
                    </Card.Header>
                    <hr />
                    {/* <div class="like_question"> <a href="#"><i class="fas fa-bookmark"></i></a> </div> */}
                    <Card.Body>
                        <Card.Text class="post_body">
                            { question.md==="false" && question.body}
                            { question.md==="true" && <div dangerouslySetInnerHTML = {createMarkup()} />}
                        </Card.Text>
                        <div className="hash_tags">
                            {tags}
                        </div>
                        <hr />
                        <CommentListView comments = {question.comments} />
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
