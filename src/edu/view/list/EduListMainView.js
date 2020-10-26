import React, { Component } from 'react'

export class EduListMainView extends Component {
    render() {
        const {eduList} = this.props
        return (
            <div>
                {eduList.eTitle}
            </div>
        )
    }
}

export default EduListMainView
