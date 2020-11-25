import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom";
import ModifyView from "../view/ModifyView"

@withRouter
@inject('Store')
@observer
class ModifyContainer extends Component {
    
    render() {
        
        function getFormatDate(date){
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '-' + month + '-' + day;
        }

        const { detail, bugBoardPosting } = this.props.Store;
        const { oauth } = this.props.Store;
        const onModifyQuestion = (postObj) => {
            let questionObj = detail._question
            questionObj.title = postObj.title
            questionObj.content = postObj.content
            questionObj.dueDate = getFormatDate(postObj.dueDate)
            questionObj.tags = postObj.tags
            bugBoardPosting.onModifyQuestion(questionObj)
        }
        return (
            <div>
                <ModifyView 
                    onModifyQuestion={onModifyQuestion} 
                    user = {oauth.getCurrentUserInfo}
                    question={detail._question}/>
            </div>
        );
    }
}

export default ModifyContainer;