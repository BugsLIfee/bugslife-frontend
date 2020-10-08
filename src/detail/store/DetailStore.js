import { observable, computed, action } from "mobx";
import testData from '../testData';

class DetailStore {

    detailApi = null;

    @observable post_id;
    @observable question;
    @observable answers;
    @observable answer;
    @observable question_comments = [];
    @observable question_comment = {};
    @observable answer_comments = [];

    constructor(detailApi) {
        // this.detailApi = detailApi;
        this.post_id = testData.post_id;
        this.question = testData.question;
        this.answers = testData.answers;
        this.question_comments = testData.question.comments;
    }

    @computed get _question() {
        return this.question ? {...this.question} : {};
    }

    @computed get _answers() {
        return this.answers ? this.answers.slice() : []; 
    }

    @computed get _question_comments() {
        return this.question_comments ? this.question_comments.slice() : [];
    }

    @computed get _question_comments() {
        return this.question_comments ? this.question_comments.slice() : [];
    }
    // @computed get _answer_lieks(id) {
    //     let result = this.answers.filter(answer => {
    //         return answer.id=id;
    //     })
    //     return result.likes;
    // }

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

    @action setCommentProps(body) {
        this.question_comment = {
            ...this.question_comment,
            body: body,
        }
    }

    @action addQuestionComment(comment) {
        this.question_comments.push(comment);
    }

    @action addAnswerComment(id, comment){
        this.answers.find(answer => {
            return answer.id==id;
        }).comments.push(comment);
    }
}

export default DetailStore;