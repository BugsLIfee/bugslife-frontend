import React, { Component } from "react";
import { List, Feed, Icon, Segment } from "semantic-ui-react";
import CountUp from "react-countup";
import "./scss/otherUserView.scss"

export default class OtherUserView extends Component {
    constructor(props){
    super(props)
    }

    render() {
        const image = "../main/pink_sqaure.png";
        const date = "3 days ago";
        const summary = "Laura Faucet created a post";
        const extraText = "Have you seen what's going on in Israel? Can you believe it.";

        const user = this.props.user;
        const {onClickPoint} = this.props;

    return (
        <>
        <div className="otherUser_header">사용자 조회</div>
        <div className="otherUser">
            <div className="MyPage_profile">
                <i id="MyPage_profile_icon" class="far fa-grin"></i>
                <br></br>

                <h2>리자몽워터</h2>
                <span classNa터e="MyPage_level">
                    <i id="MyPage_level_icon" class="fas fa-check-circle"></i>
                    <h3>
                    <strong>Level </strong>: 155
                    </h3>
                </span>
            </div>
        </div>
        <div className="otherUser_action">
            <h1 className="action_title">
            <b>User ID</b>님의 활동
            </h1>

            <div className="MyPage_action_detail">
            <div className="action_detail_column">
                <h3>출석률</h3>
                <h2 className="action_detail_rate">
                <b className="att_rate">
                    <CountUp end={100} duration={5} />
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
                <h3>답변 수</h3>
                <h2 className="action_detail_rate">
                <b className="solution_rate">
                    <CountUp end={10} duration={5} />
                </b>{" "}
                개
                </h2>
            </div>
            <div className="action_detail_column">
                <h3>답변 채택 수</h3>
                <h2 className="action_detail_rate">
                <b className="selected_rate">
                    <CountUp end={5} duration={5} />
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
            </div>
        </div>
        <div className="otherUser_detail_title">
            <h3>활동 정보</h3>
        </div>

        <div className="otherUser_detail">
            <div className="otherUser_detail_column">
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

            <div className="otherUser_detail_column">
            <h1 className="column_title">리자몽워터님의 질문</h1>
            <Segment inverted>
                <List divided inverted relaxed>
                <List.Item>
                    <List.Content>
                    <List.Header>Post Title</List.Header>
                    질문 내용 블라블라
                    </List.Content>
                    <div className="MyPage_detail_post_icon">
                    <a>
                        <Icon name="edit"></Icon>
                    </a>
                    </div>
                </List.Item>
                </List>
            </Segment>
            </div>

            <div className="otherUser_detail_column">
            <h1 className="column_title">리자몽워터님의 답변</h1>
            <Segment inverted>
                <List divided inverted relaxed>
                <List.Item>
                    <List.Content>
                    <List.Header>Post Title</List.Header>
                    질문 내용 블라블라
                    </List.Content>
                    <div className="MyPage_detail_post_icon">
                    <a>
                        <Icon name="edit"></Icon>
                    </a>
                    </div>
                </List.Item>
                </List>
            </Segment>
            </div>
        </div>
        </>
    );
    }
}
