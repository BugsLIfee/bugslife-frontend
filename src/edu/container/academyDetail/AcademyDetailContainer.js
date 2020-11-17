import React, { Component } from 'react'
import AcademyInfoContainer from './AcademyInfoContainer'
import AcademyReviewContainer from './AcademyReviewContainer'
import "../../view/scss/AcademyDetail.scss"
import { inject, observer } from 'mobx-react'

@inject("Store")
@observer
class AcademyDetailContainer extends Component {

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
                <AcademyInfoContainer eduDetail={eduDetail}/>
                <AcademyReviewContainer eduDetail={eduDetail}/>
            </div>
        )
    }
}

export default AcademyDetailContainer
