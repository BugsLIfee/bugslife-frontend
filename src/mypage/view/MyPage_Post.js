import React, { Component } from "react";
import "./scss/myPage_Post.scss";

import Mypostpostview from "./MyPostPostView";
import Mycommentview from "./MyCommentView";

export default class MypagePost extends Component {
  componentDidMount() {}

  render() {
   let {questionListByuser}= this.props
   let {commentList} = this.props;

    return (
      <div className="MyPage_post_container">

        <div className="MyPage_post_">
          <div className="MyPage_post_post MyPage_post_column">
            <h3 className="MyPage_post_title">내 게시글 관리</h3>
            <div>
              { questionListByuser.map(val=> {return <Mypostpostview post={val} />
                })}
            </div>
          </div>
          <div className="MyPage_post_comment MyPage_post_column">
            <h3 className="MyPage_post_title">내 댓글 관리</h3>
            <div>
                {
                  commentList===  undefined?
                  (<div></div>) :
                  (commentList.map(val=>{
                    return <Mycommentview comment = {val} />
                  }))
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
