import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import "../scss/EduDetail.scss"

export class EduDetailReviewView extends Component {
    render() {
        const {review} = this.props
        console.log("리뷰나누기전",review.userIcon)
        return (
            <div>

            <div className="eduReviewLayout">
                <div className="eduReviewHeader">
                    <img src={review.userIcon}></img>
                    {/* <img src="https://via.placeholder.com/40x40.png"></img> */}
                    <div className="eduReviewHeadewValue">{review.uid}</div>
                    <div className="eduReviewHeadewValue">{review.eTitle}</div>
                    <div className="eduReviewHeadewValue">{review.registDate}</div>
                </div>
                <div className="eduReviewBody">
                    <div className="eduReviewBodyL">
                        <div className="reviewRating">
                            <div className="allRate">총점 : <div className="allRateValue">{review.allRate}</div></div>
                            <div className="reviewRatingItem">&nbsp;교육 수준<Rating  name="half-rating-read" className="reviewRatingBar" defaultValue={review.eduRate} precision={0.5} readOnly size="large"/></div>
                            <div className="reviewRatingItem">&nbsp;강사진 및 매니저<Rating  name="half-rating-read" className="reviewRatingBar" defaultValue={review.lecRate} precision={0.5} readOnly size="large"/></div>
                            <div className="reviewRatingItem">&nbsp;학원 위치 및 시설<Rating  name="half-rating-read" className="reviewRatingBar" defaultValue={review.facRate} precision={0.5} readOnly size="large"/></div>
                            <div className="reviewRatingItem">&nbsp;취업기회<Rating  name="half-rating-read" className="reviewRatingBar" defaultValue={review.empRate} precision={0.5} readOnly size="large"/></div>
                        </div>
                    </div>
                    <div className="eduReviewBodyR">
                        <div className="eduReviewTitle">{review.title}</div>
                        <div className="eduReviewContent">{review.content}</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default EduDetailReviewView
