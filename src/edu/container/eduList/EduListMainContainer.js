import React, { Component } from 'react'
import EduListMainView from '../../view/list/EduListMainView'

export class EduListMainContainer extends Component {
    render() {
        const {eduList, onSelect} = this.props
        return (
            <div>
                <EduListMainView eduList={eduList} onSelect={onSelect}/>
            </div>
        )
    }
}

export default EduListMainContainer
