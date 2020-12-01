import { observable, computed, action } from "mobx";
import AnswerApi from "../api/AnswerApi.js";

export default class AnswerStore {
  answerApi = new AnswerApi();

  @observable
  answers = [];

  @observable
  answer = {};

  @computed
  get getAnswers() {
    return this.answers ? this.answers.slice() : [];
  }

  @computed
  get getAnswer() {
    return this.answer ? { ...this.answer } : {};
  }

  @action
  setAnswerProp(name, value) {
    this.answer = {
      ...this.answer,
      [name]: value,
    };
  }

  @action
  async onAddAnswer(AnswerApiModel) {
    let result = await this.answerApi.answerCreate(AnswerApiModel);
    if (result === null) {
    }
  }

  @action
  async selectAllAnswer() {
    let result = await this.answerApi.answerList();
    if (result !== null) {
      this.answers = result;
    } 
  }

  @action
  async selectAnswer(id) {
    this.answer = await this.answerApi.answerDetail(id);
  }
}
