import React, { Component } from 'react'
import EduInfoContainer from './EduInfoContainer'
import EduReviewContainer from './EduReviewContainer'
import "../../view/scss/EduDetail.scss"
import { inject, observer } from 'mobx-react'
import EduAddReviewContainer from './EduAddReviewContainer'

@inject("Store")
@observer
class EduDetailContainer extends Component {

    componentDidMount() {
        let match = this.props.match;
        this.props.Store.edu.eduReviewList(`${match.params.eid}`)
    }

    render() {

        const eduDetail = this.props.Store.edu.getEduDetail

        console.log(eduDetail)
        console.log(eduDetail.eduInfo)
        console.log(eduDetail.eduReviews)

        return (
            <div className="eduDetailLayout">
                {/* <EduInfoContainer eduDetail={eduDetail}/>
                <EduAddReviewContainer/>
                <EduReviewContainer eduDetail={eduDetail}/> */}
            </div>
        )
    }
}

export default EduDetailContainer
