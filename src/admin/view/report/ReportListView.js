import React, { useState, useEffect } from 'react'
import ReportItemView from './ReportItemView'
import { Checkbox, Radio, Pagination } from 'semantic-ui-react'
import "../scss/report.scss";

export default function ReportListView(props) {
    const {report_list, onReceiptReport, onSelectCategory, category, onSelectReportStatus} = props;
    const [report_status, setReportStatus] = useState(2);
    const [page, setPage] = useState(1);

    useEffect(() => {       
    }, [report_status, ])

    let report_list_paging = report_list.slice((page-1) *10, page*10)
    let totalPage = Math.floor(report_list.length / 10)

    if(report_list.length & 10) {
        totalPage++
    }
 
    const reports =  report_list_paging.map( report => {
        return <ReportItemView report={report} onReceiptReport={onReceiptReport}/>
    });

    const onClickReportStatus = (e, {value}) => {
        setReportStatus(value) 
        onSelectReportStatus(value);
    }

    const setNextPage = (e) => {
        setPage(e.target.getAttribute("value"))
    } 

    return (
        <>
            <p className="report_board_title">신고게시판</p>
            <div className="report_board">
                <div className="filter">
                    <p className="title">카테고리</p>
                    <div className="item">
                        {category.map((category, index)=>{
                            return <Checkbox onClick={()=>onSelectCategory(index)} label={{ children: category }} className="check_box" />
                        })}
                    </div>
                    <p className="title">처리여부</p>
                    <div className="item">
                        <Radio label='모두보기' 
                            value= {2}
                            checked = { report_status === 2}
                            onChange={onClickReportStatus}/>
                        <Radio label='처리완료' 
                            value= {0}
                            checked = {report_status === 0}
                            onChange={onClickReportStatus}/>
                        <Radio label='미완료' 
                            value= {1}
                            checked = { report_status === 1}
                            onChange={onClickReportStatus}/>
                    </div>
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
                    <div className="paging">
                        <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={2}
                            onPageChange={setNextPage}
                            totalPages={totalPage}
                        />
                    </div>
                </div>                
            </div>
        </>
    )
}
