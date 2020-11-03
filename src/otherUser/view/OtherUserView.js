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
        const {user, questions, answers, top5 } = this.props;

        const selected = answers.filter(answer => answer.is_selected===true).length;

        const top5_list = top5.map(post => {
            return (
                <Feed.Event
                    image={image}
                    date={post.date}
                    summary={post.title}
                />
            )
        })

        const question_list = questions.map(question => {
            return (
               
                    <List.Item>
                        <List.Content>
                        <List.Header>{question.date}</List.Header>
                        {question.title}
                        </List.Content>
                        <div className="MyPage_detail_post_icon">
                        <a>
                            <Icon name="edit"></Icon>
                        </a>
                        </div>
                    </List.Item>
        )})

        const answer_list = answers.map(answer => {
            return (
                    <List.Item>
                        <List.Content>
                        <List.Header>{answer.date}</List.Header>
                        {answer.title}
                        </List.Content>
                        <div className="MyPage_detail_post_icon">
                        <a>
                            <Icon name="edit"></Icon>
                        </a>
                        </div>
                    </List.Item>
        )})


    return (
        <>
        <div className="otherUser_header">사용자 조회</div>
        <div className="otherUser">
            <div className="MyPage_profile">
                <i id="MyPage_profile_icon" class="far fa-grin"></i>
                <br></br>

                <h2>{user.name}</h2>
                <span classNa터e="MyPage_level">
                    <i id="MyPage_level_icon" class="fas fa-check-circle"></i>
                    <h3>
                    <strong>Level </strong>: {user.level}
                    </h3>
                </span>
            </div>
        </div>
        <div className="otherUser_action">
            <h1 className="action_title">
            <b>{user.name}</b>님의 활동
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
                    <CountUp end={questions.length} duration={5} />
                </b>{" "}
                개
                </h2>
            </div>
            <div className="action_detail_column">
                <h3>답변 수</h3>
                <h2 className="action_detail_rate">
                <b className="solution_rate">
                    <CountUp end={answers.length} duration={5} />
                </b>{" "}
                개
                </h2>
            </div>
            <div className="action_detail_column">
                <h3>답변 채택 수</h3>
                <h2 className="action_detail_rate">
                <b className="selected_rate">
                    <CountUp end={selected} duration={5} />
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
                {}
                <div className="recently_body">
                    <Feed>
                        {top5_list}
                    </Feed>
                </div>
            </div>
            <div className="otherUser_detail_column">
                <h1 className="column_title">리자몽워터님의 질문</h1>
                <div className="column_body">
                    <Segment inverted>
                        <List divided inverted relaxed>
                            {question_list}
                        </List>
                    </Segment>
                </div>
            </div>

            <div className="otherUser_detail_column">
                <h1 className="column_title">리자몽워터님의 답변</h1>
                <div className="column_body">
                <Segment inverted>
                    <List divided inverted relaxed>
                        {answer_list}
                    </List>
                </Segment>
                </div>
            </div>
        </div>
        </>
    );
    }
}
