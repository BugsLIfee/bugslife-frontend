import { observable, computed, action } from "mobx";
import testData from '../testData';

class DetailStore {

    detailApi = null;

    @observable detail = testData;

    constructor(detailApi) {
        this.detailApi = detailApi;
    }

    @computed get _detail() {
        return this.detail ? {...this.detail} : {};
    }

    @computed get _question() {
        return this.detail.question ? {...this.detail.question} : {};
    }

    @computed get _answers() {
        return this.detail.answers ? this.detail.answers : []; 
    }

    @action setAnswerLikes(answer_id, dir) {
        if(this.detail.answers[answer_id].clicked_like && dir==="down") {
            this.detail.answers[answer_id].clicked_like = false;
            this.detail.answers[answer_id].likes -= 1;
            var tf = this.detail.answers[answer_id].clicked_like;
            var temp = this.detail.answers[answer_id].likes;
            console.log(tf);
            console.log(temp);
        } else if (!this.detail.answers[answer_id].clicked_like && dir==="up"){
            this.detail.answers[answer_id].clicked_like=true;
            this.detail.answers[answer_id].likes += 1;
            var tf = this.detail.answers[answer_id].clicked_like;
            var temp = this.detail.answers[answer_id].likes;
            console.log(tf);
            console.log(temp);
        }
    }

    @action setQuestionLike(clicked) {
        if(clicked) {
            this.detail.question.clicked_like = false;
            this.detail.question.likes -= 1;
        } else {
            this.detail.question.clicked_like = true;
            this.detail.question.likes += 1;
        }
    }
}

export default DetailStore;