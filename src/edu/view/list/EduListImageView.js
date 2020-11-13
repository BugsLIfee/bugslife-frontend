import React, { Component } from 'react'

export class EduListImageView extends Component {
    render() {
        const {eduImg} = this.props
        return (
            <div>
                <img src={eduImg} alt="eduimg"/>
            </div>
        )
    }
}

export default EduListImageView
