import React, { Component } from "react";
import "../scss/addAnswer.scss"

export default class AddAnswerView extends Component {

    render() {

        const {onInsertForm} = this.props;

        return(
            <div className="addAnswerContainer">
                <div className="addAnswerText">
                    <p>답변을 작성해주세요!</p>
                    클릭하시면 답변 작성 칸이 생성됩니다.
                    <br />
                    <div onClick={() => { onInsertForm() }}> <i class="fas fa-plus-square plus_bt"></i> </div>
                </div>
            </div>
        )
    }
}