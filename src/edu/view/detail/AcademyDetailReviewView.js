import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'
import OtherUserApi from "../../../otherUser/api/OtherUserApi"
import { Form, Button, TextArea } from 'semantic-ui-react'
import swal from 'sweetalert'
import "../scss/AcademyDetail.scss"
import ReportContainer from "../../../report/container/ReportContainer"

export class AcademyDetailReviewView extends Component {
    otherUserApi = new OtherUserApi();
    constructor(props) {
        super(props)
        this.state = {
            modifyToggle: false,
            user: "",
            imgUrl: "",
            title: this.props.review.title,
            recommend: this.props.review.recommend,
            unrecommend: this.props.review.unrecommend,
            eduRate: this.props.review.eduRate,
            empRate: this.props.review.empRate,
            facRate: this.props.review.facRate,
            lecRate: this.props.review.lecRate,
        }
    }
    async getUser(wid) {
        let result = await this.otherUserApi.getOtherUser(wid)
        return this.setState({user: result.name,
            imageUrl: result.imageUrl}) 
    }
    componentDidMount() {
        this.getUser(this.props.review.writerId)
    }
    render() {
        const onToggle = () => {
            this.setState({modifyToggle: !modifyToggle});
        }
        const {review,oauth,removeReview,updateReview} = this.props
        const {modifyToggle} = this.state
        return (
            <div>

                {modifyToggle ? <div className="academyReviewLayout">  
                    <div className="academyReviewBody">
                        <div className="academyReviewBodyL">
                            <div className="reviewRating">
                                <div className="reviewRatingItem">&nbsp;교육 수준<Rating  name="half-rating-read" className="reviewRatingBar"  defaultValue={review.eduRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({eduRate: e.target.value})}}/></div>
                                    {/* onChange={(e)=>{modifyObj.eduRate = e.target.value}}/></div> */}
                                <div className="reviewRatingItem">&nbsp;강사진 및 매니저<Rating  name="half-rating-read2" className="reviewRatingBar" defaultValue={review.lecRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({lecRate: e.target.value})}}/></div>
                                    {/* // onChange={(e)=>{modifyObj.lecRate = e.target.value}}/></div> */}
                                <div className="reviewRatingItem">&nbsp;학원 위치 및 시설<Rating  name="half-rating-read3" className="reviewRatingBar" defaultValue={review.facRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({facRate: e.target.value})}}/></div>
                                    {/* onChange={(e)=>{modifyObj.facRate = e.target.value}}/></div> */}
                                <div className="reviewRatingItem">&nbsp;취업기회<Rating  name="half-rating-read4" className="reviewRatingBar" defaultValue={review.empRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({empRate: e.target.value})}}/></div>
                                    {/* onChange={(e)=>{modifyObj.empRate = e.target.value}}/></div>   */}
                            </div>
                        </div>
                        <div className="addAcademyReviewBodyR">
                            <div className="addAcademyReviewTitle"><Form.Input fluid id="InputReviewTitle" placeholder='제목' size="tiny" defaultValue={review.title}
                                onChange={(e)=>{
                                    this.setState({
                                    ...this.state,
                                    title: e.target.value
                                    }
                                )}}/>
                            </div>
                            <div className="addAcademyReviewRecommand">
                                    <span className="reviewRecommand">장점</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} 
                                        defaultValue = {review.recommend}
                                        onChange = {(e)=>{
                                            this.setState({
                                                ...this.state,
                                                recommend: e.target.value
                                            })
                                        }}/>
                                    </Form>
                                    <span className="reviewUnrecommand">단점</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }}
                                        defaultValue = {review.unrecommend}
                                        onChange = {(e)=>{
                                            this.setState({
                                                ...this.state,
                                                unrecommend: e.target.value
                                            })
                                        }}/>
                                    </Form>
                            </div>
                            <div className="addReviewButton">
                                <Button basic color='white' className="bt" size='huge' onClick={()=> onToggle()}> 
                                    뒤로가기
                                </Button>
                                <Button basic color='gray' className="bt" size='huge' onClick={() => updateReview(this.state,review.id)}> 
                                    등록
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="academyReviewLayout">
                    <div className="academyReviewTitle">
                        <div className="academyReviewTitleInfo">
                            {this.state.imageUrl ? <img className="userIcon" src={this.state.imageUrl} alt="userIcon"></img>
                                : <img className="userIcon" src="/logo/userIcon.png" alt="userIcon"></img>}
                            <Link to={`/otherUser/${review.writerId}`} className="academyReviewTitleValue">{this.state.user}</Link>
                            {/* <div className="eduReviewTitleValue">{review.title}</div> */}
                            { review.updateDate==null ? <div className="academyReviewTitleValue">{review.registDate}</div> 
                                : <div className="academyReviewTitleValue">{review.updateDate}&nbsp;수정됨</div>}
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
                                { (review.writerId===oauth.getCurrentUserInfo.id) ? 
                                <div className="academyReviewTitleValue academyReviewClick" 
                                    onClick={
                                        ()=>{
                                            onToggle()
                                        }
                                    }
                                >리뷰수정</div> : null}
                        </div>
                        <div className="reviewHate">
                        <div className="academyReviewClick">
                                <ReportContainer bt_text = {<div>신고하기</div>} />
                            </div>
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
                </div>}
            </div>
        )
    }
}

export default AcademyDetailReviewView
