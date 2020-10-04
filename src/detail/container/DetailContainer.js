import React, { Component } from 'react';
import QuestionView from "../view/question/QuestionView";
import AnswerListView from "../view/answer/AnswerListView"
import AddAnswerView from "../view/answer/AddAnswerView"
import { observer, inject } from 'mobx-react';
import qs from "qs";
import {withRouter} from "react-router-dom";

@withRouter
@inject('Store')
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
            console.log({insertForm});
            this.setState({insertForm : !insertForm});
        }
        
        const login = searchObj.login;
        const { detail } = this.props.Store;
        const {insertForm} = this.state;

        return (
            <div>
                <QuestionView question={detail._question} login={login} />
                <AnswerListView answers={detail._answers} login={login} insertForm={insertForm} onInsertForm = {onInsertForm}/>
            </div>
        );
    }
}

export default DetailContainer;