import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';



export class EduListRatingView extends Component {
    render() {

        const {eduList} = this.props
        return (

            <div className="eduItemRatingContent">
                <Rating className="eduRatingBar" name="half-rating-read" value={parseInt(eduList.eduRate*2)/2} precision={0.5} readOnly size="large"/>
                <h3>후기&nbsp;&nbsp;<span>{eduList.reviewCnt}</span>건</h3>
            </div>
        
        )
    }
}

export default EduListRatingView
