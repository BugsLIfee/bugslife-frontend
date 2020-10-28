import React, { Component } from 'react'
import EduInfoContainer from './EduInfoContainer'
import EduReviewContainer from './EduReviewContainer'
import "../../view/scss/EduDetail.scss"
import { inject, observer } from 'mobx-react'

@inject("Store")
@observer
class EduDetailContainer extends Component {
    render() {
        return (
            <div className="eduDetailLayout">
                <EduInfoContainer/>
                <EduReviewContainer/>
            </div>
        )
    }
}

export default EduDetailContainer
