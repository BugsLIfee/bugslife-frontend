import React, { Component } from 'react'
import AcademyInfoContainer from './AcademyInfoContainer'
import AcademyReviewContainer from './AcademyReviewContainer'
import "../../view/scss/AcademyDetail.scss"
import swal from 'sweetalert'
import { inject, observer } from 'mobx-react'

@inject("Store")
@observer
class AcademyDetailContainer extends Component {

    componentDidMount() {
        let match = this.props.match;
        window.scrollTo(0,0)
        this.props.Store.edu.academyDetailInfo(`${match.params.aid}`)
    }

    onRemoveReview = (rid) => {
        this.props.Store.edu.rmReview(rid)
    }

    onFilterReview = (eid) => {
        console.log(eid)
        this.props.Store.edu.filterReview(eid)
    }

    render() {

        const onUpdateReview = (reviewObj, rid) => {
            let modifyObj = {
                id: rid,
                title : reviewObj.title,
                recommend : reviewObj.recommend,
                unrecommend : reviewObj.unrecommend,
                eduRate : reviewObj.eduRate,
                lecRate : reviewObj.lecRate,
                facRate : reviewObj.facRate,
                empRate : reviewObj.empRate
            }
            console.log(modifyObj)
            if(reviewObj.title.trim() === ""){
                swal("제목을 입력해주세요.")
                return null;
            }else if(reviewObj.recommend.trim() === ""){
                swal("장점을 입력해주세요.")
                return null;
            }else if(reviewObj.unrecommend.trim() === ""){
                swal("단점을 입력해주세요.")
                return null;
            }else{
                this.props.Store.edu.updateReview(modifyObj, rid)
            }
        }

        const academyInfo = this.props.Store.edu.getAcademyInfo
        const academyEduList = this.props.Store.edu.getAcademyEduList
        const academyReviews = this.props.Store.edu.filterReviews
        const {oauth} = this.props.Store;

        return (
            <div className="academyDetailLayout">
                <AcademyInfoContainer academyInfo={academyInfo}/>
                <AcademyReviewContainer academyEduList={academyEduList} academyReviews={academyReviews} 
                    oauth={oauth} removeReview={this.onRemoveReview} updateReview={onUpdateReview} filterReview={this.onFilterReview}/>
            </div>
        )
    }
}

export default AcademyDetailContainer
