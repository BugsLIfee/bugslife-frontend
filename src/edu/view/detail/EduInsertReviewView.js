import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Form, Button, TextArea} from 'semantic-ui-react'
import "../../view/scss/EduDetail.scss"

const options = [
    { key: 'm', text: '혁신성장 마이크로서비스 클라우드', value: 'a' },
    { key: 'f', text: 'JAVA기반 빅데이터분석 개발자 양성', value: 'b' }
  ]

export class EduInsertReviewView extends Component {
    render() {

        const { onInsertForm } = this.props;

        return (
            <div>

                <div className="eduReviewLayout">  
                    <div className="eduReviewHeader">
                        <span>교육과정 : &nbsp;</span><Form.Select options={options} placeholder='교육과정명'/>
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
                        <div className="addEduReviewBodyR">
                            <div className="addEduReviewTitle"><Form.Input id="InputReviewTitle" placeholder='제목' size="tiny"/></div>
                            <div className="addEduReviewRecommand">
                                    <span className="reviewRecommand">추천</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} />
                                    </Form>
                                    <span className="reviewUnrecommand">비추천</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} />
                                    </Form>
                            </div>
                            <div className="addReviewButton">
                                <Button basic color='white' className="bt" size='huge' onClick={()=> {onInsertForm()}}> 
                                    뒤로가기
                                </Button>
                                <Button basic color='gray' className="bt" size='huge'> 
                                    완료
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
