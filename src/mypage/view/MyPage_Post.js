import React, { Component } from "react";
import "./scss/myPage_Post.scss";

import Mypostpostview from "./MyPostPostView";
import Mycommentview from "./MyCommentView";

export default class MypagePost extends Component {
  componentDidMount() {}

  render() {
   let {questionListByuser}= this.props
   let {commentList} = this.props;

   console.log("comment ======> post")
   console.log(commentList)

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
