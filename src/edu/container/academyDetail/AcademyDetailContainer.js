import React, { Component } from 'react'
import AcademyInfoContainer from './AcademyInfoContainer'
import AcademyReviewContainer from './AcademyReviewContainer'
import "../../view/scss/AcademyDetail.scss"
import { inject, observer } from 'mobx-react'

@inject("Store")
@observer
class AcademyDetailContainer extends Component {

    componentDidMount() {
        let match = this.props.match;
        this.props.Store.edu.academyDetailInfo(`${match.params.aid}`)
    }

    render() {
        const academyInfo = this.props.Store.edu.getAcademyInfo
        const academyEduList = this.props.Store.edu.getAcademyEduList
        const academyReviews = this.props.Store.edu.getAcademyReviews

        console.log("아카데미 인포 하나를 가져옵니다",academyInfo)
        console.log("에듀리스트를 가져옵니다", academyEduList)
        console.log("학원 리뷰들을 모두 가져옵니다", academyReviews)

        return (
            <div className="academyDetailLayout">
                <AcademyInfoContainer academyInfo={academyInfo}/>
                <AcademyReviewContainer academyEduList={academyEduList} academyReviews={academyReviews}/>
            </div>
        )
    }
}

export default AcademyDetailContainer
