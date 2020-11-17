import React, { Component } from "react";
import { List, Feed, Icon, Segment } from "semantic-ui-react";
import PaymentModal from "../../payment/PaymentModal";
import "./scss/myPage.scss";
import CountUp from "react-countup";

export default class MypageHome extends Component {

  

  render() {
    const image = "../main/pink_sqaure.png";
    const date = "3 days ago";
    const summary = "Laura Faucet created a post";
    const extraText =
      "Have you seen what's going on in Israel? Can you believe it.";

    const user = this.props.user;
    const {onClickPoint} = this.props;

    console.log("user? " , user)


    //출석률 계산하기
    let timeNow= new Date().getTime();
    let enrollTime = new Date(user.enrollDate).getTime()
    let allList = this.props.allList;
    const attendList = allList.filter(val=> {return(val.uid=== user.id)})

    let timeDiff = (timeNow-enrollTime)/1000/60/60/24;
    let attendanceRate= parseInt(attendList.length/timeDiff * 100)

    // console.log(typeof attendanceRate)
    return (
      <>
        <div className="MyPage_content">
          <div className="MyPage_profile">
           {(user === undefined || user.imageUrl===null)? (<i id="MyPage_profile_icon" class="far fa-grin"></i>): ( <img className= "MyPage_profile_img" src={user.imageUrl} alt="default_profile" />)}
            {/* <img className= "MyPage_profile_img" src={user.imageUrl} />
            <i id="MyPage_profile_icon" class="far fa-grin"></i> */}
            <br></br>

            <h2>{user.name}</h2>

              <span className="MyPage_level">
              <i id="MyPage_level_icon" class="fas fa-check-circle"></i>
              <h3>
                <strong>Level </strong>: {user.level}
              </h3>
            </span>
            <span className="MyPage_coin">
              <i id="MyPage_coin_icon" class="fas fa-coins"></i>
              <h3>
                  <strong>Point </strong>: {user.point}p
              </h3>
            </span>
          </div>
        </div>
        <div className="MyPage_action">
          <h1 className="action_title">
            <b>{user.name}</b>님의 활동
          </h1>

          <div className="MyPage_action_detail">
            <div className="action_detail_column">
              <h3>출석률</h3>
              <h2 className="action_detail_rate">
                <b className="att_rate">
                  {console.log(typeof attendanceRate, attendanceRate)}
                  <CountUp end={64} duration={5} />
                </b>{" "}
                %
              </h2>
            </div>
            <div className="action_detail_column">
              <h3>질문 수</h3>
              <h2 className="action_detail_rate">
                <b className="post_rate">
                  <CountUp end={14} duration={5} />
                </b>{" "}
                개
              </h2>
            </div>
            <div className="action_detail_column">
              <h3>해결 문제 수</h3>
              <h2 className="action_detail_rate">
                <b className="solution_rate">
                  <CountUp end={10} duration={5} />
                </b>{" "}
                개
              </h2>
            </div>
            <div className="action_detail_column">
              <h3>누적 좋아요 수</h3>
              <h2 className="action_detail_rate">
                <b className="like_rate">
                  <CountUp end={27} duration={5} />
                </b>{" "}
                개
              </h2>
            </div>
            <div className="action_detail_column">
              <h3>누적 포인트</h3>
              <h2 className="action_detail_rate">
                <b className="point_rate">
                  <CountUp end={10} duration={5} />
                </b>{" "}
                P
              </h2>
            </div>
          </div>
        </div>
        <div className="MyPage_detail_title">
          <h3>활동 관리</h3>
        </div>

        <div className="MyPage_detail">
          <div className="MyPage_detail_column">
            <a href="/">
              <i id="MyPage_detail_icon" class="fas fa-plus"></i>
            </a>
            <h1 className="column_title">최근 활동</h1>
            <Feed>
              <Feed.Event
                image={image}
                date={date}
                summary={summary}
                extraText={extraText}
              />

              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content
                  date={date}
                  summary={summary}
                  extraText={extraText}
                />
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                  <Feed.Date content={date} />
                  <Feed.Summary content={summary} />
                  <Feed.Extra text content={extraText} />
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </div>

          <div className="MyPage_detail_column">
            <a href="/">
              <i id="MyPage_detail_icon" class="fas fa-plus"></i>
            </a>
            <h1 className="column_title">게시글 관리</h1>
            <Segment inverted>
              <List divided inverted relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header>Post Title</List.Header>
                    질문 내용 블라블라
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

          <div className="MyPage_detail_column">
            <a href="/">
              <i id="MyPage_detail_icon" class="fas fa-plus"></i>
            </a>
            <h1 className="column_title">포인트 관리</h1>

            <div className="MyPage_detail_columm_point">
              <div className="MyPage_detail_columm_point_card curr_point">
                <h3>
                  <i id="MyPage_detail_coin" class="fas fa-coins"></i>
                  <b>Point</b> : 10p
                </h3>
              </div>
              <PaymentModal bt_text={
                <div className="MyPage_detail_columm_point_card charge_point">
                  <h3>
                    <b> 충전하기</b>
                  </h3>
                </div>
              }/>
              <div className="MyPage_detail_columm_point_card history_point"
                onClick={() => {onClickPoint("point")}}>
                <h3>
                  <b> 사용내역</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
