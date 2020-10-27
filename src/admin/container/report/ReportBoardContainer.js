import React, { Component } from 'react'
import ReportListView from '../../view/report/ReportListView'
import { observer, inject } from 'mobx-react'

@inject("Store")
@observer
class ReportBoardContainer extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            report_type : 0, 
            is_done: 0,
        }
    }
    
    render() {

        const onSelectCategory = (type, done) => {
            this.setState({
                report_type: type,
                is_done: done
            })
        }

        const category = ['', '영리목적/홍보성','개인정보노출', '불법정보', '음란성/선정성', '욕설/인신공격',  '같은내용반복(도배)', '기타']
        const done_status = [false, true]

        const report_list = this.props.Store.report._report_list;
        let filter_list;

        if(this.state.report_type === 0) filter_list = report_list;
        else {
            filter_list = report_list.map(report => {
                return report.type === category[this.state.report_type];
            })
        }
        // else if(this.state.report_type === 1) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '영리목적/홍보성';
        //     })
        // }
        // else if(this.state.report_type === 2) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '개인정보노출';
        //     })
        // }
        // else if(this.state.report_type === 3) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '불법정보';
        //     })
        // }
        // else if(this.state.report_type === 4) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '음란성/선정성';
        //     })
        // }
        // else if(this.state.report_type === 5) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '욕설/인신공격';
        //     })
        // }
        // else if(this.state.report_type === 6) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '같은내용반복(도배)';
        //     })
        // }
        // else if(this.state.report_type === 7) {
        //     filter_list = report_list.map( report => {
        //         return report.type === '기타';
        //     })
        // }
        // else {
        //     console.log("잘못된 요청입니다.")
        // }

        if (this.state.is_done === 0) filter_list = report_list; 
        else {
            filter_list = report_list.map( report => {
                return report.is_done === done_status[this.state.is_done];
            })
        }
        // if (this.state.is_done === 0) filter_list = report_list; 
        // else if(this.state.is_done === 1) {
        //     filter_list = report_list.map( report => {
        //         return report.is_done === false;
        //     })
        // } else if(this.state.is_done === 2) {
        //     filter_list = report_list.map( report => {
        //         return report.type === true;
        //     })
        // } else {
        //     console.log("잘못된 요청입니다.")
        // }
        
        return (
            <ReportListView report_list = {filter_list} onSelectCategory={onSelectCategory}/>
        )
    }
}

export default ReportBoardContainer