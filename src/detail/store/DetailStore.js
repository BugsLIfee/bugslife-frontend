import { observable, computed, action } from "mobx";
import DetailApi from "../api/DetailApi";


class DetailStore {

    detailApi = new DetailApi;
    @observable detail = {};
    @observable post_id;
    @observable question = {};
    @observable answers;
    @observable answer;
    @observable question_comments = [];
    @observable question_comment = {};
    @observable answer_comments = [];
    @observable answer_id;

    // constructor(detailApi) {
    //     // this.detailApi = detailApi;
    //     this.post_id = testData.post_id;
    //     this.question = testData.question;
    //     this.answers = testData.answers;
    //     this.question_comments = testData.question.comments;
    // }

    @computed get _question() {
        console.log({...this.question});
        return this.question ? {...this.question} : {};
    }

  @computed get _answers() {
    return this.answers ? this.answers.slice() : []
  }

  @computed get _question_comments() {
    return this.question_comments ? this.question_comments.slice() : []
  }

    @computed get _answer_comments() {
        return this.answers.find(answer => {
            return answer.id==this.answer_id;
        }).comments.slice();
    }

    @computed get _detail() {
        return this.detail ? { ...this.detail } : {};
    }

    @action
    async selectDetail(id) {
        this.detail = await this.detailApi.detailDetail(id);
        console.log("Store에서 detail이 찍히나요?", this.detail);
        if(this.detail === null) {
            console.log(`${id}: Not Found ERROR!!`);
        }
    }

    @action
    async selectQuestion(id) {
        this.question = await this.detailApi.questionDetail(id);
        console.log("Store에서 question이 찍히나요?", this._question);
        if(this.detail === null) {
            console.log(`${id}: Not Found ERROR!!`);
        }
    }


  @action setAnswerLike(answer_id, dir) {
    if (this.answers[answer_id].clicked_like && dir === "down") {
      this.answers[answer_id].clicked_like = false
      this.answers[answer_id].likes -= 1
    } else if (!this.answers[answer_id].clicked_like && dir === "up") {
      this.answers[answer_id].clicked_like = true
      this.answers[answer_id].likes += 1
    }
  }

  @action setQuestionLike(clicked) {
    if (clicked) {
      this.question.clicked_like = false
      this.question.likes -= 1
    } else {
      this.question.clicked_like = true
      this.question.likes += 1
    }
  }

  @action setCommentProps(body) {
    this.question_comment = {
      ...this.question_comment,
      body: body,
    }
  }

  @action addQuestionComment(comment) {
    this.question_comments.push(comment)
  }

  @action addAnswerComment(id, comment){
      console.log(id, comment, comment.body);

      this.answers.find(answer => {
          return answer.id==id;
      }).comments.push(comment);
  }

  @action setAnswerId(id) {
      this.answer_id = id;
  }

  
  @action
  async selectPost(id) {
      // this.post = await this.
  }
}

export default DetailStore
