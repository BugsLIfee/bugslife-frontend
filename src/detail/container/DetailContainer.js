import React, { Component } from 'react';
import QuestionView from "../view/QuestionView";
import AnswerView from "../view/AnswerView"
import qs from "qs";
import {withRouter} from "react-router-dom";

@withRouter
class DetailContainer extends Component {
    
    render() {
           const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
            //const  id  = this.props.match.params.id;
        console.log(",,,,,",searchObj.id);
        console.log(",,,,,",searchObj.name);
        console.log(",,,,,",searchObj.code);
        return (
            <div>
                <QuestionView />
                <AnswerView />
            </div>
        );
    }
}

export default DetailContainer;