import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import swal from 'sweetalert'
import "../scss/AcademyDetail.scss"
import ReportContainer from "../../../report/container/ReportContainer"

export class AcademyDetailReviewView extends Component {
    render() {
        const {review,oauth,removeReview} = this.props
        console.log("리뷰 아이디지롱",review.id)
        console.log("제목",review.eduTitle)
        return (
            <div>

                <div className="academyReviewLayout">
                    <div className="academyReviewTitle">
                        <div className="academyReviewTitleInfo">
                            <img src="public/logo/userIcon.png" alt="userLogo"></img>
                            <div className="academyReviewTitleValue academyReviewClick">연결안된 유저</div>
                            {/* <div className="eduReviewTitleValue">{review.title}</div> */}
                            <div className="academyReviewTitleValue">{review.registDate}</div>
                            <div className="academyReviewTitleValue academyReviewClick">
                                <ReportContainer bt_text = {<div>신고</div>} />
                            </div>
                            { (review.writerId===oauth.getCurrentUserInfo.id) ? 
                            <div className="academyReviewTitleValue academyReviewClick" 
                                onClick={
                                    () => {swal("리뷰를 삭제하시겠습니까?",{
                                            buttons: {
                                                삭제: true,
                                                cancel: "취소"
                                            }
                                        }
                                    ).then((value) => {
                                        if(value){swal("삭제되었습니다").then(()=>removeReview(review.id))}
                                    })}
                                }>리뷰삭제</div> : null}
                        </div>
                        <div className="reviewHate">
                            <div className="academyReviewClick">광고 의심</div>
                            <div className="reviewHateValue">&nbsp;&nbsp;{review.adReport}</div>
                        </div>
                    </div>
                    <div className="academyEduTitleValue">{review.eduTitle}</div>
                    <div className="academyReviewBody">
                        <div className="academyReviewBodyL">
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
                        <div className="academyReviewBodyR">
                            <div className="reviewTitle">{review.title}</div>
                            <span className="reviewRecommand">장점</span>
                            <div className="academyReviewContent">{review.recommend}</div>
                            <span className="reviewUnrecommand">단점</span>
                            <div className="academyReviewContent">{review.unrecommend}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AcademyDetailReviewView
