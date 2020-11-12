import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ReportModalContainer from "../../../report/container/ReportContainer"
import "../scss/comment.scss"

export default class CommentView extends Component {

    render() {
        const { comment } = this.props;
        return(
            <div>
                <Card className="comment">
                    <Card.Body>
                        <Card.Text>
                        <div className="comment_info">
                            <a href="/">{comment.writer_id}</a> 
                            <span class="comment_date">{comment.date}</span>
                            <div className="report"> <ReportModalContainer bt_text = {<div>신고</div>} /> </div>
                        </div>
                        <div class="comment_body">
                            {comment.body}
                        </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
