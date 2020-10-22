import { observable, computed, action } from "mobx";
import DetailApi from "../testData";

class DetailStore {

  @observable question = DetailApi;
  @observable question_likes = DetailApi.question.likes;
  @observable question_clicked_like = DetailApi.question.clicked_like;
  @observable question_comments = DetailApi.question.comments;
  @observable answers = DetailApi.question.answers;
  @observable answers_comments = [];
  answer_id;

  @computed get _question() {
      console.log({...this.question});
      return this.question ? {...this.question.question} : {};
  }

  @computed get _answers() {
    return this.answers ? this.answers.slice() : []
  }
  
  @computed get _question_comments() {
    return this.question_comments ? this.question_comments.slice() : []
  }

  get _answer_comments() {
      return this.answers.find(answer => {
        return answer.id === this.answer_id;
      }).comments.slice();
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

  @action setQuestionLike() {
    console.log(this.question_clicked_like, this.question_likes)
    if (this.question_clicked_like) {
      this.question_clicked_like = false
      this.question_likes -= 1
    } else {
      this.question_clicked_like = true
      this.question_likes += 1  
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
      this.answers.find(answer => {
          return answer.id==id;
      }).comments.push(comment);
  }

  @action setAnswerId(id) {
    this.answer_id = id;
  }
}

export default DetailStore
