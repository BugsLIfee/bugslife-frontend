import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Form, Button, TextArea, Dropdown} from 'semantic-ui-react'
import "../../view/scss/EduDetail.scss"

const options = [
    { key: 'mul101', text: '학원ID와 교육ID 조인필터 교육과정', value: 'mul101' },
    { key: 'mul102', text: '학원ID와 교육ID 조인필터 교육과정2', value: 'mul102' },
  ]

export class EduInsertReviewView extends Component {
    state = { options }

    // handleAddition = (e, { value }) => {
    // this.setState((prevState) => ({
    //     options: [{ text: value, value }, ...prevState.options],
    //     }))
    // }

    // handleChange = (e, { value }) => this.setState({ currentValue: value })

    render() {

        const { onInsertForm } = this.props;
        // const { currentValue } = this.state

        return (
            <div>

                <div className="eduReviewLayout">  
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
                            <Dropdown
                                className="eduSelector"
                                options={this.state.options}
                                placeholder='교육과정명'
                                fluid
                                search
                                selection
                            />
                            <div className="addEduReviewTitle"><Form.Input fluid id="InputReviewTitle" placeholder='제목' size="tiny"/></div>
                            <div className="addEduReviewRecommand">
                                    <span className="reviewRecommand">장점</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} />
                                    </Form>
                                    <span className="reviewUnrecommand">단점</span>
                                    <Form className="recommandTextArea">
                                        <TextArea style={{ minHeight: 100 }} />
                                    </Form>
                            </div>
                            <div className="addReviewButton">
                                <Button basic color='white' className="bt" size='huge' onClick={()=> {onInsertForm()}}> 
                                    뒤로가기
                                </Button>
                                <Button basic color='gray' className="bt" size='huge'> 
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
