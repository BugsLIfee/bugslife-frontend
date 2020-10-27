import React, { Component } from 'react'
import ReportListView from '../../view/report/ReportListView'
import { observer, inject } from 'mobx-react'

@inject("Store")
@observer
class ReportBoardContainer extends Component {
    
    
    render() {
        const report_list = this.props.Store.report._report_list;
        
        return (
            <ReportListView report_list = {report_list} />
        )
    }
}

export default  ReportBoardContainer