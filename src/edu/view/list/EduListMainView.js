import React, { Component } from 'react'

export class EduListMainView extends Component {
    render() {
        const {eduList, onSelect} = this.props
        return (
            <div className="eduItemMainContent">
                <a href={`/edu/detail/${eduList.eId}`} className="eduItemETitle">{eduList.eTitle}</a>
                <div>
                    <a href={`/edu/detail/${eduList.eId}`} className="eduItemATitle" onClick={()=>onSelect(eduList.eId)}>{eduList.aTitle}</a>
                    <span>&nbsp;&nbsp;({eduList.address}&nbsp;{eduList.telephone})</span>
                </div>
                <div className="eduItemDate">
                    교육기간 : <span>{eduList.startDate} ~ {eduList.endDate}</span>
                </div>
            </div>
        )
    }
}

export default EduListMainView
