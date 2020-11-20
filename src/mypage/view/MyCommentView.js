import React, { Component } from 'react'
import { List, Icon, Segment } from "semantic-ui-react";

export default class Mycommentview extends Component {
    render() {
        let commentObj = this.props;
        let comment = commentObj.comment

        
        return (
            <Segment inverted>
            <List divided inverted relaxed>
              <List.Item>
                <List.Content>
                  <List.Header>댓글 내용</List.Header>
                   <div style={{marginTop : "0.5rem"}} > {comment.content} </div>
                  <p className="MyPage_comment_date">
                    작성 날짜 : {comment.registDate}
                  </p>
                </List.Content>

                <div className="MyPage_detail_post_icon">
                  <a href="/">
                    <Icon name="edit"></Icon>
                  </a>
                  <a href="/">
                    <Icon name="delete"></Icon>
                  </a>
                </div>
              </List.Item>
            </List>
          </Segment>
        )
    }
}
