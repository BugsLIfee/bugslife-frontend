import React, { Component } from 'react'
import {Dropdown} from 'semantic-ui-react'
import EduDetailReviewView from '../../view/detail/EduDetailReviewView'
import "../../view/scss/EduDetail.scss"

// const options = [
//     { key: 'mul101', text: '학원ID와 교육ID 조인필터 교육과정', value: 'mul101' },
//     { key: 'mul102', text: '학원ID와 교육ID 조인필터 교육과정2', value: 'mul102' },
//   ]

export class EduReviewContainer extends Component {
    // state = { options }
    render() {
        const {eduReviews} = this.props
        console.log(eduReviews)

        const review = eduReviews.map((review) => {
            return (
                <EduDetailReviewView review={review}/>
            )
        })

        return (
            <div>
                <div className="eduReviewHeader">
                    <div className="reviewHeaderTitle">교육과정 후기</div>
                    {/* <Dropdown
                        className="eduReviewSelector"
                        options={this.state.options}
                        placeholder='교육과정명'
                        fluid
                        search
                        selection
                    /> */}
                </div>
                {review}
            </div>
        )
    }
}

export default EduReviewContainer
