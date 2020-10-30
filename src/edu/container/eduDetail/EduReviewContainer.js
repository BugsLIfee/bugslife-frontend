import React, { Component } from 'react'
import EduDetailReviewView from '../../view/detail/EduDetailReviewView'

export class EduReviewContainer extends Component {
    render() {
        const {eduDetail} = this.props

        const review = eduDetail.review.map((review) => {
            return (
                <EduDetailReviewView review={review}/>
            )
        })

        return (
            <div>
                {review}
            </div>
        )
    }
}

export default EduReviewContainer
