import React, { Component } from "react";
import "./scss/myPage_Post.scss";
import { List, Icon, Segment } from "semantic-ui-react";
import Mypostpostview from "./MyPostPostView";

export default class MypagePost extends Component {
  componentDidMount() {}

  render() {
   let {questionListByuser}= this.props

    return (
      <div className="MyPage_post_container">
        <h1>post</h1>
        <div className="MyPage_post_">
          <div className="MyPage_post_post MyPage_post_column">
            <h3 className="MyPage_post_title">내 게시글 관리</h3>
            <div>
              { questionListByuser.map(val=> {return <Mypostpostview post={val} />
                })}
            </div>
          </div>
          <div className="MyPage_post_comment MyPage_post_column">
            <h3 className="MyPage_post_title">내 답글 관리</h3>
            <div>
              <Segment inverted>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>댓글 내용</List.Header>
                      아무래도 그건 제가 블라블라 에러같네요. 크롬에서
                      해보셨나요?
                      <p className="MyPage_comment_date">
                        작성 날짜 : 2020-09-30 00:00:00
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
          </div>
        </div>
      </div>
    );
  }
}
