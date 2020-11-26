import React, { Component } from 'react'
import EduInfoContainer from './EduInfoContainer'
import EduReviewContainer from './EduReviewContainer'
import "../../view/scss/EduDetail.scss"
import { inject, observer } from 'mobx-react'
import swal from 'sweetalert'
import EduAddReviewContainer from './EduAddReviewContainer'

@inject("Store")
@observer
class EduDetailContainer extends Component {

    componentDidMount() {
        let match = this.props.match;
        window.scrollTo(0,0)
        this.props.Store.edu.eduDetailInfo(`${match.params.eid}`)
    }

    onRemoveReview = (rid) => {
        this.props.Store.edu.rmReview(rid)
    }
    
    onCheckReview = (wid,eid) => {
        this.props.Store.edu.checkReview(wid,eid)
    }

    onSetUser = (wid) => {
        console.log(wid)
        this.props.Store.edu.getUser(wid)
    }

    render() {

        const eduReviews = this.props.Store.edu.getEduReviews
        const eduInfo = this.props.Store.edu.getEduInfo
        const {check, user} = this.props.Store.edu
        const {oauth} = this.props.Store;

        const onAddReview = (reviewObj) => {
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
                reviewObj.writer = oauth.getCurrentUserInfo.id
                reviewObj.eduId = eduInfo.id
                reviewObj.academyId = eduInfo.academyId
                reviewObj.eduTitle = eduInfo.title + " " + eduInfo.eduDegr + "기"
                this.props.Store.edu.addReview(reviewObj)
            }
        }
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
        

        // console.log(this.props.Store.edu.checkReview(3))
        // let result = this.props.Store.edu.checkReview(1).then((value)=>{return value})
        // console.log(result)
        return (
            <div className="eduDetailLayout">
                <EduInfoContainer eduInfo={eduInfo}/>
                <EduAddReviewContainer onAddReview={onAddReview} eduInfo={eduInfo}
                    oauth={oauth} checkReview={this.onCheckReview} check={check}/>
                <EduReviewContainer eduReviews={eduReviews} removeReview={this.onRemoveReview} 
                    oauth={oauth} updateReview={onUpdateReview} user={user} getUser={this.onSetUser}/>
            </div>
        )
    }
}

export default EduDetailContainer
