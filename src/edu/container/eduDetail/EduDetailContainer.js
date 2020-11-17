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
        this.props.Store.edu.eduDetailInfo(`${match.params.eid}`)
    }

    render() {

        const eduReviews = this.props.Store.edu.getEduReviews
        const eduInfo = this.props.Store.edu.getEduInfo

        return (
            <div className="eduDetailLayout">
                <EduInfoContainer eduInfo={eduInfo}/>
                <EduAddReviewContainer/>
                {/* <EduReviewContainer eduReviews={eduReviews}/> */}
            </div>
        )
    }
}

export default EduDetailContainer
