import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';



export class EduListRatingView extends Component {
    render() {

        const {eduList} = this.props
        const {reviewLists} = this.props
        console.log(reviewLists.length)
        console.log(reviewLists[0])
        
        //let reviewRating = 
        return (

            <div className="eduItemRatingContent">
                <Rating className="eduRatingBar" name="half-rating-read" defaultValue={eduList.rating} precision={0.5} readOnly size="large"/>
                <h3>후기&nbsp;&nbsp;<span>{reviewLists.length}</span>건</h3>
            </div>
        
        )
    }
}

export default EduListRatingView
