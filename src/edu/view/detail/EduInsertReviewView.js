import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Form, Button, TextArea } from 'semantic-ui-react'
import "../scss/EduDetail.scss"


export class EduInsertReviewView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            recommend: "",
            unrecommend: "",
            eduRate: 0,
            empRate: 0,
            facRate: 0,
            lecRate: 0,
            eduId: "",
            academyId: "",
            writer: "",
            eduTitle: "",
        }
    }
    
    render() {

        const { onInsertForm, onAddReview } = this.props;
        return (
            <div>
                <div className="eduReviewLayout">  
                    <div className="eduReviewBody">
                        <div className="eduReviewBodyL">
                            <div className="reviewRating">
                                <div className="reviewRatingItem">&nbsp;교육 수준<Rating  name="half-rating-read" className="reviewRatingBar"  defaultValue={this.state.eduRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({eduRate: e.target.value})}}/></div>
                                <div className="reviewRatingItem">&nbsp;강사진 및 매니저<Rating  name="half-rating-read2" className="reviewRatingBar" defaultValue={this.state.lecRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({lecRate: e.target.value})}}/></div>
                                <div className="reviewRatingItem">&nbsp;학원 위치 및 시설<Rating  name="half-rating-read3" className="reviewRatingBar" defaultValue={this.state.facRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({facRate: e.target.value})}}/></div>
                                <div className="reviewRatingItem">&nbsp;취업기회<Rating  name="half-rating-read4" className="reviewRatingBar" defaultValue={this.state.empRate} precision={0.5} size="large"
                                    onChange={(e)=>{this.setState({empRate: e.target.value})}}/></div>  
                            </div>
                        </div>
                        <div className="addEduReviewBodyR">
                            <div className="addEduReviewTitle"><Form.Input fluid id="InputReviewTitle" placeholder='제목' size="tiny" 
                                onChange={(e)=>{this.setState({
                                    ...this.state,
                                    title: e.target.value
                                })}}/>
                            </div>
                            <div className="addEduReviewRecommand">
                                    <span className="reviewRecommand">장점</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} 
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
                                        onChange = {(e)=>{
                                            this.setState({
                                                ...this.state,
                                                unrecommend: e.target.value
                                            })
                                        }}/>
                                    </Form>
                            </div>
                            <div className="addReviewButton">
                                <Button basic color='white' className="bt" size='huge' onClick={()=> {onInsertForm()}}> 
                                    뒤로가기
                                </Button>
                                <Button basic color='gray' className="bt" size='huge' onClick={() => onAddReview(this.state)}> 
                                    등록
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EduInsertReviewView
