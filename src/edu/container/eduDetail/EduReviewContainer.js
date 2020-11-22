import React, { Component } from 'react'
import EduDetailReviewView from '../../view/detail/EduDetailReviewView'
import "../../view/scss/EduDetail.scss"

export class EduReviewContainer extends Component {
    render() {
        const {eduReviews} = this.props

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
