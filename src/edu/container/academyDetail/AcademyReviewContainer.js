import React, { Component } from 'react'
import {Dropdown} from 'semantic-ui-react'
import { AcademyDetailReviewView } from '../../view/detail/AcademyDetailReviewView'
import "../../view/scss/AcademyDetail.scss"

export class AcademyReviewContainer extends Component {
    options = [];
    render() {
        const {academyReviews, academyEduList} = this.props
        this.options = academyEduList.map((edu) => {
            return {
                key: edu.id,
                text: edu.title+" "+edu.eduDegr+"기",
                value: edu.id
            }
        })
        const review = academyReviews.map((review) => {
            return (
                <AcademyDetailReviewView review={review}/>
            )
        })

        return (
            <div>
                <div className="academyReviewHeader">
                    <div className="reviewHeaderTitle">교육과정 후기</div>
                    <Dropdown
                        className="academyReviewSelector"
                        options={this.options}
                        placeholder='교육과정명'
                        fluid
                        search
                        selection
                    />
                </div>
                {review}
            </div>
        )
    }
}

export default AcademyReviewContainer
