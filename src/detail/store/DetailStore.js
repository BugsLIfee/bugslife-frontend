import { observable, computed, action } from "mobx";
import DetailApi from "../api/DetailApi.js";
import AnswerApiModel from "../api/model/AnswerApiModel.js";
import CommentApiModel from "../api/model/CommentApiModel.js"
import getToday from "../module/GetToday.js";

class DetailStore {

  @observable postApi = new DetailApi();
  @observable post;
  @observable question = {};
  @observable answers = [];
  @observable question_likes;
  @observable question_clicked_like;
  @observable question_comments;
  @observable answers_comments = [];
  answer_id;

  @action
  async selectPost(id) {
    this.post = await this.postApi.postDetail(id);
    this.question = this.post.question ? { ...this.post.question } : {};
    this.answers = this.post.answers ? this.post.answers : [];
    this.question_likes = this.question.likes;
    this.question_comments = this.question.comments;
  } 
  
  @computed get _question() {
      return this.question ? {...this.question} : {};
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
    this.question_comments.push(Object.assign(comment, { registDate: getToday()}))
    this.onAddComment(comment);
  }

  @action addAnswerComment(comment){
      this.answers.find(answer => {
          return answer.id === comment.answerId;
      }).comments.push(Object.assign(comment, {registDate: getToday()}));

      this.onAddComment(comment);
  }

  @action setAnswerId(id) {
    this.answer_id = id;
  }

  @action 
  async onAddAnswer(answerObj) {
    this.answers.push(Object.assign(
      answerObj,
      {
        registDate: getToday(),
        comments: []
      }
      ))
    answerObj = new AnswerApiModel(answerObj);
    await this.postApi.answerCreate(answerObj);
  }

  @action 
  async onAddComment(commentObj) {
    commentObj = new CommentApiModel(commentObj);
    await this.postApi.commentCreate(commentObj);
  }

  @action 
  async onDeleteQuestion(id) {
    await this.postApi.questionDelete(id);
  }

  @action 
  async onDeleteAnswer(id) {
    this.answers = this.answers.filter((answer) => {
      return answer.id !== id;
    })
    await this.postApi.answerDelete(id);
  }

  @action 
  async onDeleteComment(id) {
    let find = false;

    this.question_comments = this.question_comments.filter((comment) => {
      find = true;
      return comment.id !== id;
    })

    if (find === false) {
      this.answers.map(answer => { answer.comments = answer.comments.filter((comment) => {
          return comment.id !== id;
    })})}

    await this.postApi.commentDelete(id);
  }
}
export default DetailStore
