import React, { Component } from "react";
import QuestionView from "../view/question/QuestionView";
import AnswerListView from "../view/answer/AnswerListView";
import LikeButtonView from "../view/LikesButtonView";
import { observer, inject } from 'mobx-react';

import qs from "qs";
import { withRouter } from "react-router-dom";

@withRouter
@inject("Store")
@observer
class DetailContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            insertForm : false
        }
    }
    
    render() {
        const searchObj = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });

        const onInsertForm = () => {
            this.setState({insertForm : !insertForm});
        }
        
        const login = searchObj.login;
        const detail= this.props.Store.detail;
        const {insertForm} = this.state;

        return (
            <div>
                <QuestionView detail={detail} question={detail._question} login={login} />
                <AnswerListView detail={detail} answers={detail._answers} login={login} insertForm={insertForm} onInsertForm = {onInsertForm} />
            </div>
        );
    }

}

export default DetailContainer;
