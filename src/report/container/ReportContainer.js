import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import ReportModalView from "../view/ReportModalView";

@inject("Store")
@observer
class ReportModalContainer extends Component {

    render() {

        const category = this.props.Store.report._category;
        console.log("INCONTAINER: ", category);
        return (
                <ReportModalView 
                    category={category}
                />
        );
    }
}

export default ReportModalContainer;
