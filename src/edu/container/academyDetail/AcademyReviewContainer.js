import React, { Component } from 'react'
import {Dropdown} from 'semantic-ui-react'
import { AcademyDetailReviewView } from '../../view/detail/AcademyDetailReviewView'
import "../../view/scss/AcademyDetail.scss"

export class AcademyReviewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue : "",
        }
    }
    options = [];

    handleChange = (e, data) => {
        // this.setState({selectedValue: data.value})
        this.props.filterReview(data.value)
    }

    render() {
        const {academyReviews, academyEduList, oauth, removeReview, updateReview} = this.props
        this.options = academyEduList.map((edu) => {
            return ({
                key: edu.id,
                text: edu.title+" "+edu.eduDegr+"기",
                value: edu.id
            })
        })
        this.options.push({
            key: "all",
            text: "전체보기",
            value: "all"
        })
        const review = academyReviews.map((review) => {
            return (
                <AcademyDetailReviewView review={review} oauth={oauth} removeReview={removeReview} updateReview={updateReview}/>
            )
        })

        return (
            <div>
                <div className="academyReviewHeader">
                    <div className="reviewHeaderTitle" onClick={()=>{}}>교육과정 후기</div>
                    <Dropdown
                        className="academyReviewSelector"
                        options={this.options}
                        placeholder='교육과정명'
                        fluid
                        search
                        selection
                        onChange={this.handleChange}
                    />
                </div>
                {review}
            </div>
        )
    }
}

export default AcademyReviewContainer
