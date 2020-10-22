import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import PointListView from "../view/PointListView";

@inject("Store")
@observer
class PointContainer extends Component {

    render() {

        const points = this.props.Store.point._points;

        return (
            <div>
                <PointListView 
                    points={points}
                />
            </div>
        );
    }
}

export default PointContainer;
