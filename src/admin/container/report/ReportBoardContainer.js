import React, { useState, useEffect } from 'react'
import ReportListView from '../../view/report/ReportListView'
import { observer, inject } from 'mobx-react'

function ReportBoardContainer(props) {
    
    
    const category = props.Store.report._category;
    let report_list = [];
    const [report_status, setReportStatus] = useState(2)
    const [visibles, setVisibles] = useState([false, false, false, false, false, false, false, false])
    const [filter_list, setFilterList] = useState();
    

    useEffect(() => {
        props.Store.report.getAllList();  
    }, [])

    useEffect(() => {
        report_list = props.Store.report._report_list
        setFilterList(report_list)
        if(visibles.find(element => element===true) !== undefined) {
            console.log(report_list)
            setFilterList(report_list.filter(report => {
                if(report_status === 2)
                {
                    return visibles[category.indexOf(report.reportType)];
                } else if(report_status === 0)
                {
                    return visibles[category.indexOf(report.reportType)] && report.done===true;
                } else 
                {
                    return visibles[category.indexOf(report.reportType)] && report.done===false;
                }
            }
        ) 
        )}
        else {
            setFilterList(report_list.filter(report => {
                if(report_status === 2) {
                    return true;
                } else if(report_status === 0) {
                    return report.done===true;
                } else {
                    return report.done===false;
                }
            }))
        }
    },[visibles, report_status])

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