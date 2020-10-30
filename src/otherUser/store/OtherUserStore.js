import React, { Component } from 'react'
import { observable, computed } from 'mobx'
import User from "./testData"

export default class Otheruserstore extends Component {

    @observable user
    @observable questions 
    @observable answers

    constructor()
    {
        super();
        this.user = User;
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
        
        let top5 = []
        let q_idx = 0, a_idx =0;

        for(let i=0; i<5; ++i) {
            if(questions[q_idx].date > answers[a_idx].date)
            {
                top5.push(questions[q_idx])
                q_idx++;
            } else
            {
                top5.push(answers[a_idx])
                a_idx++;
            }
        }
        return top5.slice();
    }
}
