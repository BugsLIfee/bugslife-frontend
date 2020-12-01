import { observable, computed, action } from "mobx";
import QuestionApiModel from "../api/Model/QuestionApiModel";
import QuestionApi from "../api/QuestionApi.js";

export default class QuestionStore {
  questionApi = new QuestionApi();

  @observable
  questions = [];

  @observable
  question = {};

  @computed
  get getQuestions() {
    return this.questions ;
  }

  @computed
  get getQuestion() {
    return this.question ? { ...this.question } : {};
  }

  @action
  setQuestionProp(name, value) {
    this.info = {
      ...this.question,
      [name]: value,
    };
  }

  @action
  async onAddQuestion(qusetionApiModel) {
    let result = await this.questionApi.questionCreate(qusetionApiModel);
    if (result === null) {
    }
  }

  @action
  async selectAllQuestion() {
    let result = await this.questionApi.questionList();
   
    if (result !== null) {
      this.questions= result;
       this.questions=result.map(question=>new QuestionApiModel(question)).slice();
    } else {
      console.log(`${this.question.id}:TODO CREATE ERROR!`);
    }
  }

  @action
  async selectQuestion(id) {
    this.question = await this.questionApi.questionDetail(id);
    if (this.question === null) {
      console.log(`${id}: Not Found ERROR!!`);
    }
  }
}
