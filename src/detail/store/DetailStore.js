import { observable, computed, action } from "mobx";
import testData from '../testData';

class DetailStore {

    detailApi = null;

    // @observable detail = testData;
    @observable post_id;
    @observable question;
    @observable answers;

    constructor(detailApi) {
        // this.detailApi = detailApi;
        this.post_id = testData.post_id;
        this.question = testData.question;
        this.answers = testData.answers;
    }

    @computed get _question() {
        return this.question ? {...this.question} : {};
    }

    @computed get _answers() {
        return this.answers ? this.answers.slice() : []; 
    }

    @action setAnswerLike(answer_id, dir) {
        if(this.answers[answer_id].clicked_like && dir==="down") {
            this.answers[answer_id].clicked_like = false;
            this.answers[answer_id].likes -= 1;
        } else if (!this.answers[answer_id].clicked_like && dir==="up"){
            this.answers[answer_id].clicked_like=true;
            this.answers[answer_id].likes += 1;
        }
    }

    @action setQuestionLike(clicked) {
        if(clicked) {
            this.question.clicked_like = false;
            this.question.likes -= 1;
        } else {
            this.question.clicked_like = true;
            this.question.likes += 1;
        }
    }
}

export default DetailStore;