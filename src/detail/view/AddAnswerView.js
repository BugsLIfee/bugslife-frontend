import React, { Component } from "react";
import { Card} from "react-bootstrap";
import "./scss/addAnswer.scss"


export default class AnswerView extends Component {

    render() {

        return(
            <div className="addAnswerContainer">
                <div className="addAnswerText">
                    <p>답변을 작성해주세요!</p>
                    클릭하시면 답변 작성 칸이 생성됩니다.
                    <br />
                    <a href="#"> <i class="fas fa-plus-square plus_bt"></i> </a>
                </div>
            </div>
        )
    }
}