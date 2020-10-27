import React, { Component } from 'react'
import ReportItemView from './ReportItemView'
import "../scss/report.scss";

export default class ReportListView extends Component {
    render() {
        const {report_list, on} = this.props;

        const reports =  report_list.map( report => {
            return <ReportItemView report={report} />
        });

        return (
            <div>
                <p className="report_board_title">신고게시판</p>
                <div className="report_board">
                    <div className="filter">
                        <p className="title">카테고리</p>
                    </div>
                    <div className = "report_list">
                        <div className="report_list_header">
                            <p>신고번호</p>
                            <p>사유</p>
                            <p>상세내용</p>
                            <p>날짜</p>
                            <p>게시글링크</p>
                            <p>처리여부</p>
                        </div>
                        {reports}
                    </div>                
                </div>
            </div>
        )
    }
}
