import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import "../scss/AcademyDetail.scss"
import ReportContainer from "../../../report/container/ReportContainer"

export class AcademyDetailReviewView extends Component {
    render() {
        const {review} = this.props
        console.log("리뷰나누기전",review.userIcon)
        return (
            <div>

                <div className="eduReviewLayout">
                    <div className="eduReviewTitle">
                        <div className="eduReviewTitleInfo">
                            <img src="public/logo/userIcon.png" alt="userLogo"></img>
                            <div className="eduReviewTitleValue eduReviewClick">연결안된 유저</div>
                            {/* <div className="eduReviewTitleValue">{review.title}</div> */}
                            <div className="eduReviewTitleValue">{review.registDate}</div>
                            <div className="eduReviewTitleValue eduReviewClick">
                                <ReportContainer bt_text = {<div>신고</div>} />
                            </div>
                        </div>
                        <div className="reviewHate">
                            <div className="eduReviewClick">광고 의심</div>
                            <div className="reviewHateValue">&nbsp;&nbsp;{review.adReport}</div>
                        </div>
                    </div>
                    <div className="eduReviewBody">
                        <div className="eduReviewBodyL">
                            <div className="reviewRating">
                                <div className="allRate">
                                    <p>총점</p> 
                                    <Rating name="half-rating-read" className="reviewRatingBar" value={review.reivewsRate} precision={0.5} readOnly size="large"/>
                                    {/* {review.reivewsRate} */}
                                </div>
                                <div className="reviewRatingItem">&nbsp;교육 수준
                                    <Rating name="half-rating-read" className="reviewRatingBar" value={review.eduRate} precision={0.5} readOnly size="large"/>
                                    {/* {review.eduRate} */}
                                </div>
                                <div className="reviewRatingItem">&nbsp;강사진 및 매니저
                                    <Rating  name="half-rating-read" className="reviewRatingBar" value={review.lecRate} precision={0.5} readOnly size="large"/>
                                    {/* {review.lecRate} */}
                                </div>
                                <div className="reviewRatingItem">&nbsp;학원 위치 및 시설
                                    <Rating  name="half-rating-read" className="reviewRatingBar" value={review.facRate} precision={0.5} readOnly size="large"/>
                                    {/* {review.facRate} */}
                                </div>
                                <div className="reviewRatingItem">&nbsp;취업기회
                                    <Rating  name="half-rating-read" className="reviewRatingBar" value={review.empRate} precision={0.5} readOnly size="large"/>
                                    {/* {review.empRate} */}
                                </div>
                            </div>
                        </div>
                        <div className="eduReviewBodyR">
                            <div className="reviewTitle">{review.title}</div>
                            <span className="reviewRecommand">장점</span>
                            <div className="eduReviewContent">{review.recommend}</div>
                            <span className="reviewUnrecommand">단점</span>
                            <div className="eduReviewContent">{review.unrecommend}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AcademyDetailReviewView
