import React, { Component } from 'react'
import { List, Icon, Segment } from "semantic-ui-react";

export default class Mypostpostview extends Component {

    render() {
        let post = this.props.post;

        let content =post.content;

        const createMarkup = function(){
            return {__html:content}
        }

        return (
            <div>
            <Segment inverted>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>{post.title}</List.Header>
                        <div style={{marginTop : "0.5rem"}} dangerouslySetInnerHTML= {createMarkup()} />
                      <div className="MyPage_post_action">
                        <b>답변 수 : </b>5  <span role="img">|</span> <b>좋아요  <span role="img" aria-label="aria"> ❤️ </span>:</b> 5 <span role="img">|</span> 
                        <b> 포인트 : </b> {post.point}
                      </div>
                      <p className="MyPage_post_date">
                        작성 날짜 : {post.registDate}
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
            </div>
        )
    }
}
