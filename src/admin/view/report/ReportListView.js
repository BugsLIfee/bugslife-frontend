import React, { Component } from 'react'

export default class ReportListView extends Component {
    render() {
        const {report_list} = this.props;

        return (
            <div>
                {report_list}
            </div>
        )
    }
}
