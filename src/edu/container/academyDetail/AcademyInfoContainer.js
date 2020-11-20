import React, { Component } from 'react'
import AcademyDetailInfoView from '../../view/detail/AcademyDetailInfoView'

export default class AcademyInfoContainer extends Component {
    render() {
        const {academyInfo} = this.props
        return (
            <div>
                <AcademyDetailInfoView academyInfo={academyInfo}/>
            </div>
        )
    }
}
