import React, { Component } from 'react'
import ReportDetailModalView from './ReportDetailModalView'
import "../scss/report.scss"

export default class ReportListView extends Component {
    render() {
        const {report, onReceiptReport} = this.props;

        return (
            <div className="report_list_item">
                <p>{report.id}</p>
                <p>{report.reportType}</p>
                <p>
                    <ReportDetailModalView bt_text = {<p>{report.reportDetail}</p>}
                        report = {report}
                        onReceiptReport = {onReceiptReport}
                    />
                </p>
                <p>{report.registDate.substring(0,10)}</p>
                <p>{report.boardType}/{report.boardId}</p>
                {report.is_done === true ? <p className="done">처리완료</p> : <p className="yet">미완료</p>}
            </div>
        )
    }
}
