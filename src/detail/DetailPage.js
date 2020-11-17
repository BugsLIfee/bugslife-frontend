import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./view/scss/post.scss"
import QuestionHeaderContainer from "./container/question/QuestionHeaderContainer";
import QuestionLikesContainer from "./container/question/QuestionLikesContainer";
import QuestionBodyContainer from "./container/question/QuestionBodyContainer";
import QuestionCommentListContainer from "./container/comment/QuestionCommentListContainer";
import QuestionInsertCommentContainer from "./container/comment/QuestionInsertCommentContainer";
import AnswerListContainer from "./container/answer/AnswerListContainer";
import AddAnswerContainer from "./container/answer/AddAnswerContainer";
import { inject } from "mobx-react";

@inject('Store')
class DetailPage extends Component {

    id;

    componentDidMount () {
        this.props.Store.detail.selectPost(this.id);
        window.scrollTo(0,0);
    }

    render() {

        this.id = this.props.match.params.post_id; 

        return(
            <div>
                <div className="question post">
                    <Card>
                        <Card.Header className="post_header">
                            <QuestionHeaderContainer />
                        </Card.Header>
                        <hr />
                        <QuestionLikesContainer/>
                        <Card.Body>
                            <QuestionBodyContainer />
                        </Card.Body>
                        <Card.Footer className="text-muted text-center post_footer">
                            <QuestionCommentListContainer  />
                            <QuestionInsertCommentContainer questionId = {this.id} />
                        </Card.Footer>
                    </Card>
                </div>
                <AnswerListContainer questionId = { this.id } />
                <AddAnswerContainer questionId = { this.id }/>
            </div>
        )
    }
}

export default DetailPage