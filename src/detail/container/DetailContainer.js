import React, { Component } from 'react';
import QuestionView from "../view/QuestionView";
import AnswerListView from "../view/AnswerListView"
import AddAnswerView from "../view/AddAnswerView"
import { observer, inject } from 'mobx-react';
import qs from "qs";
import {withRouter} from "react-router-dom";

@withRouter
@inject('Store')
@observer
class DetailContainer extends Component {
    
    render() {
        const searchObj = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });
            //const  id  = this.props.match.params.id;
        const { detail } = this.props.Store;

        return (
            <div>
                <QuestionView question={detail._question} />
                <AnswerListView answers={detail._answers} />
                <AddAnswerView />
            </div>
        );
    }
}

export default DetailContainer;