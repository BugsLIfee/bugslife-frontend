import React, { Component } from "react";
import { Card, Button, Badge} from "react-bootstrap";
import "./scss/post.scss"


export default class AnswerView extends Component {

    render() {

        return(
            <div class="answer">
                <Card>
                    <Card.Header class="answer_header">
                        <div class="question_meta">
                            <div class="writer_info"> 
                                <img src="../logo/logo_st.png" class="writer_icon" /> 
                                <div class="writer_info_text">
                                    <div class="writer_id">송파구 비트마스크 </div>
                                    <div class="writer_level">level 6. 알록달롱 코뎅이 </div>
                                </div>
                            </div>
                            <div className="question_info">
                                    <div class="upload_date">2020.09.30 &nbsp; | &nbsp; </div>
                                    <div class="views"> 조회수 30  &nbsp; | &nbsp; </div>
                                    <div class="report"> <a href="#"> <i class="fas fa-ban"></i> 신고 </a> </div>
                            </div>
                        </div>
                    </Card.Header>
                    <hr />
                    <Card.Body>
                        <Card.Text class="question_body">
                            안녕하세요!
                            <br/>
                            저는 프로그래밍 + 디자인 융합된 전공을 공부하고 있는 대학교 2학년생입니다. (현재는 휴학중입니다)
                            <br/>
                            아직 할 수 있는 것은 프론트엔드밖에 없지만, 휴학하는 1년동안 지인들이 간단한 사이트를 만들어 달라고 하면 만들 수 있을 정도의 수준을 목표로 공부하고 있습니다. 
                            <br/>
                            이제 처음으로 백엔드 언어를 공부하려고 하는데, Node.js 와 PHP 둘 중 어떤 언어를 공부해야 할 지 고민이 됩니다.
                            <br/>
                            처음엔 인프런, Udemy, 노마드 코더 등 강의 사이트들을 봤을 때 Node.js 강의가 PHP보다 더 많고, 현재 뜨고 있는 언어라는 생각이 들어서 Node.js쪽으로 생각을 하고 있었습니다. 그러던 중 아빠가 연습삼아 커뮤니티 비슷한 홈페이지를 만들어달라고 하셨습니다. PHP가 전통있는 언어라, 자료를 찾기도 더 쉬울 거라고들 하는데, 제가 1년 간 PHP에 매진해 공부를 하는 것이 맞는 선택일지 잘 모르겠습니다. 아직까지 이 언어를 쓰는 곳들이 많다고 하지만 PHP는 죽어가는 언어라는 말도 있어서요. 
                            <br/>
                            Node.js 를 공부하는 것이 나을지, PHP를 공부하는 것이 나을 지 조언 부탁드립니다. 
                            <br/>
                            읽어주셔서 감사합니다!! 
                        </Card.Text>
                        <div className="hash_tags">
                            <Badge variant="info">PHP</Badge>{' '}
                            <Badge variant="info">Node.js</Badge>{' '}
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center question_footer">댓글을 남기려면 <a href="#" >로그인</a> 해주세요.</Card.Footer>
                </Card>
            </div>
        )
    }

}
