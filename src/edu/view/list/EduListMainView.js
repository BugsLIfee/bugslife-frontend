import React, { Component } from 'react'

export class EduListMainView extends Component {
    render() {
        const {eduList} = this.props
        return (
            <div>
                <a href="#" className="eduItemTitle">{eduList.eTitle}</a>
            </div>
        )
    }
}

export default EduListMainView
