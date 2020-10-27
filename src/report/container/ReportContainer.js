import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import ReportModalView from "../view/ReportModalView";

@inject("Store")
@observer
class ReportModalContainer extends Component {

    render() {
        
        const category = this.props.Store.reportCagetgory._category;
        const bt_text = this.props.bt_text;
        return (
                <ReportModalView 
                    category = {category}
                    bt_text = {bt_text}
                />
        );
    }
}

export default ReportModalContainer;
