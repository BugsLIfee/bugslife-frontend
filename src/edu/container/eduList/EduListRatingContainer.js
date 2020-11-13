import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import EduListRatingView from '../../view/list/EduListRatingView'
import "../../view/scss/EduList.scss"

// @inject("Store")
// @observer
class EduListRatingContainer extends Component {
    render() {
        const {eduList,eduId} = this.props
        // this.props.Store.edu.setEduId(eduId)

        // const reviewLists = this.props.Store.edu.getEduReview
        // console.log("gd",reviewLists)

        return (
            <div className="eduRatingFlex">
                <EduListRatingView eduList={eduList}/>
            </div>
        )
    }
}

export default EduListRatingContainer
