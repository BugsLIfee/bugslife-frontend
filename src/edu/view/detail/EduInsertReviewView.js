import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import "../../view/scss/EduDetail.scss"

export class EduInsertReviewView extends Component {
    render() {

        const { onInsertForm } = this.props;

        return (
            <div>

                <div className="eduReviewLayout">
                    <div className="eduReviewHeader">
                        {/* <img src="https://via.placeholder.com/40x40.png"></img> */}
                        <div className="eduReviewHeadewValue"></div>
                        <div className="eduReviewHeadewValue"></div>
                        <div className="eduReviewHeadewValue"></div>
                    </div>
                    <div className="eduReviewBody">
                        <div className="eduReviewBodyL">
                            <div className="reviewRating">
                                <div className="reviewRatingItem">&nbsp;교육 수준<Rating  name="half-rating-read" className="reviewRatingBar" defaultValue={0} precision={0.5} size="large"/></div>
                                <div className="reviewRatingItem">&nbsp;강사진 및 매니저<Rating  name="half-rating-read2" className="reviewRatingBar" defaultValue={0} precision={0.5} size="large"/></div>
                                <div className="reviewRatingItem">&nbsp;학원 위치 및 시설<Rating  name="half-rating-read3" className="reviewRatingBar" defaultValue={0} precision={0.5} size="large"/></div>
                                <div className="reviewRatingItem">&nbsp;취업기회<Rating  name="half-rating-read4" className="reviewRatingBar" defaultValue={0} precision={0.5} size="large"/></div>
                            </div>
                        </div>
                        <div className="eduReviewBodyR">
                            <div className="eduReviewTitle">제목</div>
                            <div className="eduReviewContent">내용</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EduInsertReviewView
