import React, { Component } from 'react'
import EduDetailInfoView from '../../view/detail/EduDetailInfoView'

export class EduInfoContainer extends Component {
    render() {
        const {eduInfo} = this.props
        return (
            <div>
                <EduDetailInfoView eduInfo={eduInfo}/>
            </div>
        )
    }
}

export default EduInfoContainer
