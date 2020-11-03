import React, { Component } from 'react'
import EduInfoContainer from './EduInfoContainer'
import EduReviewContainer from './EduReviewContainer'
import "../../view/scss/EduDetail.scss"
import { inject, observer } from 'mobx-react'
import EduAddReviewContainer from './EduAddReviewContainer'

@inject("Store")
@observer
class EduDetailContainer extends Component {

    render() {
        const eduId = this.props.match.params.id;
        this.props.Store.edu.setEduId(eduId)

        const eduDetails = this.props.Store.edu.getEduDetail
        const Id = this.props.Store.edu.getEduId

        console.log(Id)
        
        console.log(eduDetails)

        const eduDetail = eduDetails[Id-1]
        return (
            <div className="eduDetailLayout">
                <EduInfoContainer eduDetail={eduDetail}/>
                <EduAddReviewContainer/>
                <EduReviewContainer eduDetail={eduDetail}/>
            </div>
        )
    }
}

export default EduDetailContainer
