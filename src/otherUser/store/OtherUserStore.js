import { Component } from 'react'
import { observable, computed, action } from 'mobx'
import User from "./testData"
import OtherUserApi from '../api/OtherUserApi'
import BugBoardListApi from '../../list/api/BugBoardListApi';

export default class Otheruserstore extends Component {


    otherApi = new OtherUserApi();
    bugboradApi = new BugBoardListApi();

    @observable user = {};
    @observable questions=[] ;
    @observable answers=[];

    constructor()
    {
        super();
        this.user = {};
        this.questions = this.user.questions ? 
            this.user.questions.slice().sort((a, b) => {
                if ( a.date < b.date ){
                    return 1;
                }
                if ( a.date > b.date ){
                    return -1;
                }
                return 0;
            }) : [];

        this.answers = this.user.answers ?
            this.user.answers.slice().sort((a, b) => {
                if ( a.date < b.date ){
                    return 1;
                }
                if ( a.date > b.date ){
                    return -1;
                }
                return 0;
            }) : [];
    }

    @computed get _user() {
        return this.user ? {...this.user} : {};
    }

    @computed get _answers() {
        return this.answers ? this.answers.slice() : [];
    }

    @computed get _questions() {
        return this.questions ? this.questions.slice() : [];
    }

    @computed get _recently_top5() {
    
        const questions = this._questions
        const answers = this._answers
        
        let top5 = [];
        let q_idx = 0, a_idx =0;

        if(questions.length>0){
        for(let i=0; i<5 ; i++) {
            console.log(questions[q_idx].registDate)

            console.log("i === ", i)
            if(questions.length<=q_idx && answers.length<=a_idx) {
                break;
            } else if(questions.length<=q_idx && answers.length>a_idx) {
                console.log(answers.slice(a_idx,a_idx+5-i)[0])
                top5.push(answers.slice(a_idx,a_idx+5-i)[0])
                break;
            } else if(questions.length>q_idx && answers.length<=a_idx) {
                console.log("no answer")
                console.log(top5)
                // console.log(questions.slice(i,5-i))
                console.log(questions.slice(q_idx,q_idx+5-i)[0])
                top5.push(questions.slice(q_idx,q_idx+5-i)[0])
                console.log(top5)
                break;
            } else {
                if(questions[q_idx].registDate > answers[a_idx].registDate) {
                    top5.push(questions[q_idx])
                    q_idx++;
                } else{
                    top5.push(answers[a_idx])
                    a_idx++;
                }
            }
        }

        console.log("final top5: " , top5)
        return top5;
        }
    }

    @action
    async getOtherUser(uid){
        let result =  await this.otherApi.getOtherUser(uid);
        console.log("리졸트", result)
        this.user  = result;
        this.questions = await this.bugboradApi.bugBoardListById(uid);
        this.answers = await this.bugboradApi.bugboradCommentList(uid)
        console.log("질문리스트 : ", this.questions);
        console.log("답변리스트 : ", this.answers);
    }
}
