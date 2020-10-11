import { observable, computed, action } from "mobx";
import QuestionApiModel from "../api/Model/QuestionApiModel";
import QuestionApi from "../api/QuestionApi.js";

export default class QuestionStore {
  qusetionApi = new QuestionApi();

  @observable
  questions = [];

  @observable
  question = {};

  @computed
  get getQuestions() {
    return this.questions ? this.questions.slice() : [];
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
      console.log(`${this.question.id}:question CREATE ERROR!`);
    }
  }

  @action
  async selectAllQuestion() {
    console.log("selectall 스토어 도착!")
    let result = await this.questionApi.questionList();
    console.log("selectall 스토어리스트", result);
    if (result !== null) {
      this.questions = result;
    } else {
      console.log(`${this.question.id}:TODO CREATE ERROR!`);
    }
  }

  @action
  async selectQuestion(id) {
    this.question = await this.questionApi.questionDetail(id);
    console.log("store에서 question 찍히나요?", this.question);
    if (this.question === null) {
      console.log(`${id}: Not Found ERROR!!`);
    }
  }
}
