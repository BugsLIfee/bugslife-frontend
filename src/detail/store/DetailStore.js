import { observable, computed, action } from "mobx";
import DetailApi from "../api/DetailApi.js";
import AnswerApiModel from "../api/model/AnswerApiModel.js";
import CommentApiModel from "../api/model/CommentApiModel.js"
import getToday from "../module/GetToday.js";
import generateId from "../module/IDGenerator.js";
import AnswerModifyApiModel from "../api/model/AnswerModifyApiModel.js";

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
  async selectPost(id, user) {
    this.post = await this.postApi.postDetail(id);
    this.question = this.post.question ? { ...this.post.question } : {};
    this.answers = this.post.answers ? this.post.answers : [];
    this.answers = this.answers.filter(answer => answer.selected).concat(this.answers.filter(answer=>!answer.selected))
    
    // 좋아요 크크
    this.question_clicked_like = this.question.likeList.slice().filter(likeUser => {
      return likeUser.userId === user.id
    }).length === 0 ? false : true
    this.question_likes = this.question.likes;
    
    
    this.answers = this.answers.map(answer => {
      const answerClicked = answer.likeList.filter(likeUser => {
        return likeUser.userId === user.id
      }).length === 0 ? false : true
      return Object.assign(answer, {clicked_like: answerClicked})
    })

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

  @action 
  async setAnswerLike(answer_id, dir, userId) {
    if (this.answers.find(answer => answer.id === answer_id).clicked_like && dir === "down") {
      this.answers.find(answer => answer.id === answer_id).clicked_like = false
      this.answers.find(answer => answer.id === answer_id).likes -= 1
      await this.postApi.deleteAnswerLike(answer_id, userId)
    } else if (this.answers.find(answer => answer.id === answer_id).clicked_like === false && dir === "up") {
      this.answers.find(answer => answer.id === answer_id).clicked_like = true
      this.answers.find(answer => answer.id === answer_id).likes += 1
      await this.postApi.addAnswerLike(answer_id, userId)
    }
  }

  @action 
  async setQuestionLike(userId) {
    if (this.question_clicked_like) {
      this.question_clicked_like = false
      this.question_likes -= 1
      await this.postApi.deleteQuestionLike(this.question.id, userId);
    } else {
      this.question_clicked_like = true
      this.question_likes += 1  
      await this.postApi.addQuestionLike(this.question.id, userId);
    }
  }

  @action setCommentProps(body) {
    this.question_comment = {
      ...this.question_comment,
      body: body,
    }
  }

  @action addQuestionComment(comment) {
    this.question_comments.push(Object.assign(comment, { registDate: getToday(), id: generateId()}))
    this.onAddComment(comment);
  }

  @action addAnswerComment(comment){
      this.answers.find(answer => {
          return answer.id === comment.answerId;
      }).comments.push(Object.assign(comment, {registDate: getToday(), id: generateId()}));

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
        comments: [],
        id: generateId(),
        clicked_like: false,
        likes: 0
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
  async onModifyAnswer(answerObj) {
    this.answer = this.answers.map(answer => {
      if(answer.id === answerObj.id) {
        answer.updateDate = getToday();
        answer.content = answerObj.content;
      }
        return answer;
    })
    answerObj = new AnswerModifyApiModel(answerObj);
    await this.postApi.answerModify(answerObj)
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

  @action
  async onSelectAnswer(answer_id) {
    this.answers = this.answers.filter(answer => {
        return answer.id === answer_id
      }
    ).concat(this.answers.filter(answer => answer.id !== answer_id))

    this.answers[0].selected = true;
    this.question.done = true;

    await this.postApi.onSelectAnswer(answer_id);
  }
}

export default DetailStore
