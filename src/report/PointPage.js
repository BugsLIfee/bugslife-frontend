import React, { Component } from "react";
// import "./view/scss/.scss"
import PointContainer from "./container/PointContainer";
// import PointContainer from "./view/ListTest.js";
import qs from "qs";

class PointPage extends Component {

    render() {
        const searchObj = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });

        return(
            <div>
                <PointContainer />
            </div>
        )
    }
}

export default PointPage