import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import "../scss/EduList.scss"

export class EduListRatingView extends Component {
    render() {

        const {eduList} = this.props
        return (

            <div className="ratingBar">
                <Rating name="half-rating-read" defaultValue={eduList.rating} precision={0.5} readOnly size="large"/>
            </div>
        
        )
    }
}

export default EduListRatingView
