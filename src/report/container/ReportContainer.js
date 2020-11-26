import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import ReportModalView from "../view/ReportModalView";

@inject("Store")
@observer
class ReportModalContainer extends Component {

    render() {

        const category = this.props.Store.report._category;
        const bt_text = this.props.bt_text;

        const onAddReport = (report) => {
            const reportObj = Object.assign(report, {
                boardType: this.props.boardType, 
                boardId: this.props.boardId
            });

            this.props.Store.report.onAddReport(reportObj);
        }

        return (
                <ReportModalView 
                    category = {category}
                    bt_text = {bt_text}
                    onAddReport = {onAddReport}
                />
        );
    }
}

export default ReportModalContainer;
