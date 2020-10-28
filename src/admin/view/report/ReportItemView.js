import React, { Component } from 'react'
import "../scss/report.scss"

export default class ReportListView extends Component {
    render() {
        const {report} = this.props;

        return (
            <div className="report_list_item">
                <p>{report.id + 1}</p>
                <p>{report.type}</p>
                <p>{report.detail}</p>
                <p>{report.date}</p>
                <p>{report.post_type}/{report.post_id}</p>
                <p>{report.is_done === true ? 'Y' : 'N'}</p>
            </div>
        )
    }
}
