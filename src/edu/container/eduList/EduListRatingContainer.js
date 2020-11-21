import React, { Component } from 'react'
import EduListRatingView from '../../view/list/EduListRatingView'
import "../../view/scss/EduList.scss"


class EduListRatingContainer extends Component {
    render() {
        const {eduList} = this.props

        return (
            <div className="eduRatingFlex">
                <EduListRatingView eduList={eduList}/>
            </div>
        )
    }
}

export default EduListRatingContainer
