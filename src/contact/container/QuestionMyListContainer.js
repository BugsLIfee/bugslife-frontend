
import React, { Component } from 'react';
import qna from '../data/qna';
import qnaType from "../data/category";
import QuestionList from "../view/QuestionList";
import { observer, inject } from "mobx-react";

@inject("Store")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
@observer
class QuestionMyListContainer extends Component {
    //1. 내 질문 보기에서 클릭시 (/qna/my)
    //userId로 question검색후 questionList 가져오기

    //2.admin에서 질문목록 가져올때
    // question 모두 가져오기 //검색기능 있으면 좋고 
    
    render() {
       //myqeustionlist 
       let userId =59824;
       let questionMyList =this.props.Store.question.selectQuestion(userId);
        //let qna = qna;
        //let qnatype = qnatype;
        return (
            <div>
                <QuestionList ListData={qna} TypeData={qnaType} />
            </div>
        );
    }
}

export default QuestionMyListContainer;