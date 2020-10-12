import React, { Component } from 'react';
import qna from '../data/qna';
import qnaType from "../data/category";
import QuestionList from "../view/QuestionList";
import { observer, inject } from "mobx-react";

@inject("Store")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
@observer
class QuestionAllListContainer extends Component {
    //1. 내 질문 보기에서 클릭시 (/qna/my)
    //userId로 question검색후 questionList 가져오기

    //2.admin에서 질문목록 가져올때
    // question 모두 가져오기 //검색기능 있으면 좋고 
    
    render() {
       //admin에서 호출하는 questionlist컨테이너
        let questionAllList =this.props.Store.question.selectAllQuestion();
        console.log("questionAllList",questionAllList);
        // let qna = qna;
        // let qnatype = qnatype;
        return (
            <div>
                <QuestionList ListData={qna} TypeData={qnaType} />
            </div>
        );
    }
}

export default QuestionAllListContainer;