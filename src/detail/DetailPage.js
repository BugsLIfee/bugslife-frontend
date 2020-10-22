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
import qs from "qs";
import { observer, inject } from "mobx-react";

class DetailPage extends Component {

    render() {
        const searchObj = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });

        const login = searchObj.login;

        return(
            <div>
                <div class="question post">
                    <Card>
                        <Card.Header className="post_header">
                            <QuestionHeaderContainer />
                        </Card.Header>
                        <hr />
                        <QuestionLikesContainer login = { login } />
                        <Card.Body>
                            <QuestionBodyContainer />
                            <QuestionCommentListContainer login = { login } />
                        </Card.Body>
                        <Card.Footer className="text-muted text-center post_footer">
                            <QuestionInsertCommentContainer login = { login } />
                        </Card.Footer>
                    </Card>
                </div>
                {/* <AnswerListContainer login={ login } />
                <AddAnswerContainer login={ login } /> */}
            </div>
        )
    }
}

export default DetailPage