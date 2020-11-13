import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class EduListMainView extends Component {
    render() {
        const {eduList, onSelect} = this.props
        return (
            <div className="eduItemMainContent">
                {/* <a href={`/edu/detail/${eduList.id}/${eduList.academyId}`} className="eduItemETitle">{eduList.title}</a> */}
                <Link to={`/edu/detail/${eduList.id}/${eduList.academyId}`} className="eduItemETitle">{eduList.title}</Link>
                <div>
                    {/* <a href={`/edu/detail/${eduList.id}/${eduList.academyId}`} className="eduItemATitle" onClick={()=>onSelect(eduList.id)}>{eduList.academyTitle}</a> */}
                    <Link to={`/edu/detail/${eduList.id}/${eduList.academyId}`} className="eduItemATitle">{eduList.academyTitle}</Link>
                    <span>&nbsp;&nbsp;({eduList.simpleAddr}&nbsp;{eduList.telNo})</span>
                </div>
                <div className="eduItemDate">
                    교육기간 : <span>{eduList.startDate} ~ {eduList.endDate}</span>
                </div>
            </div>
        )
    }
}

export default EduListMainView
