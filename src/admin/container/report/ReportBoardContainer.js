import React, { useState, useEffect } from 'react'
import ReportListView from '../../view/report/ReportListView'
import { observer, inject } from 'mobx-react'

function ReportBoardContainer(props) {
    
    const category = ['영리목적/홍보성','개인정보노출', '불법정보', '음란성/선정성', '욕설/인신공격',  '같은내용반복(도배)', '기타']
    const [report_status, setReportStatus] = useState(2)
    const report_list = props.Store.report._report_list;
    const [visibles, setVisibles] = useState([false, false, false, false, false, false, false, false])
    const [filter_list, setFilterList] = useState(report_list);
    
    useEffect(() => {
        setFilterList(report_list)

        if(visibles.find(element => element===true) !== undefined) {
            setFilterList(report_list.filter(report => {
                if(report_status === 2)
                {
                    return visibles[category.indexOf(report.type)];
                } else if(report_status === 0)
                {
                    return visibles[category.indexOf(report.type)] && report.is_done===true;
                } else if(report_status === 1)
                {
                    return visibles[category.indexOf(report.type)] && report.is_done===false;
                }
        }))}
        else {
            setFilterList(report_list.filter(report => {
                if(report_status === 2)
                {
                    return true;
                } else if(report_status === 0)
                {
                    return report.is_done===true;
                } else if(report_status === 1)
                {
                    return report.is_done===false;
                }
            }))
        }
    }, [visibles, report_status])

    const onSelectCategory = (type) => {
        setVisibles(
            visibles.map((visible, index) => {
                if(index===type) return !visible;
                return visible;
        }))
    }

    const onSelectReportStatus = (type) => {
        setReportStatus(type)
    }

    const onReceiptReport = (id, is_blind) => {
        props.Store.report.receipt_report(id, is_blind);
    }

    return (
        <ReportListView 
            report_list = {filter_list} 
            category={category} 
            onReceiptReport = {onReceiptReport}
            onSelectReportStatus={onSelectReportStatus}
            onSelectCategory={onSelectCategory}/>
        )
    }

export default inject('Store')(observer(ReportBoardContainer))