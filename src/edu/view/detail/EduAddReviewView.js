import React, { Component } from 'react'
import "../scss/EduDetail.scss"

export class EduAddReviewView extends Component {
    render() {

        const {onInsertForm} = this.props;

        return (

                <div className="blue_btn">
                    <button className="blue_btn_" onClick={() => { onInsertForm() }}><h2>후기 작성하기</h2></button>
                </div>
        )
    }
}

export default EduAddReviewView
