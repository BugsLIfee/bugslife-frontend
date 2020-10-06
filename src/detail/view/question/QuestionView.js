import React, { Component } from "react";
import { Card, InputGroup, FormControl, Button} from "react-bootstrap";
import { Label } from "semantic-ui-react"
import "../scss/post.scss"
import CommentListView from "../comment/CommentListView";
import marked from "marked";

export default class QuestionView extends Component {

    render() {
        const detail= this.props.detail;
        const question = detail._question;
        const { login } = this.props;
        const md_text = marked( question.body );
        console.log("QuestionView");

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
            <div class="question post">
                <Card>
                    <Card.Header className="post_header">
                        <div className="post_meta">
                            <div className="question_title">
                                <i className="fab fa-quora question_mark"></i> 
                                {' ' + question.title}
                            </div>
                            
                            <div className="detail_post_subtitle">
                                <div>
                                    <div className="writer_info"> 
                                        <img src="../logo/logo_st.png" className="writer_icon" /> 
                                        <div className="writer_info_text">
                                            <div className="writer_id">{question.writer_id}</div>
                                            <div className="writer_level">{question.writer_lv} </div>
                                        </div>
                                    </div>
                                    <div className="post_info">
                                            <div className="upload_date"> {question.date} &nbsp; | &nbsp; </div>
                                            <div className="views"> 조회수 {question.views}  &nbsp; | &nbsp; </div>
                                            <div className="report"> <a href="#"> <i className="fas fa-ban"></i> 신고 </a> </div>
                                    </div>
                                </div>
                                <div className="detail_points">
                                    <div className="point">
                                        {question.point}P
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <hr />
                    <div className="detail_question_likes">
                        <div>
                            <p>{question.likes}</p>
                            <div>나도 궁금해요!</div>
                        </div>
                            {!question.clicked_like && <img src="../detail/empty_bookmark.png" onClick={() => {detail.setQuestionLike(question.clicked_like)}} />}
                            {question.clicked_like && <img src="../detail/bookmark.png" onClick={() => {detail.setQuestionLike(question.clicked_like)}} />}
                    </div>
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
