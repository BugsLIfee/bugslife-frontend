import React, { Component } from 'react'
import EduDetailInfoView from '../../view/detail/EduDetailInfoView'

export class EduInfoContainer extends Component {
    render() {
        const {eduDetail} = this.props
        return (
            <div>
                <EduDetailInfoView eduDetail={eduDetail}/>
            </div>
        )
    }
}

export default EduInfoContainer
