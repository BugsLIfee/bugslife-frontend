import React, { Component } from 'react'
import EduListMainView from '../../view/list/EduListMainView'

export class EduListMainContainer extends Component {
    render() {
        const {eduList} = this.props
        return (
            <div>
                <EduListMainView eduList={eduList}/>
            </div>
        )
    }
}

export default EduListMainContainer
