import { observable, computed, action } from "mobx";
import AnswerApiModel from "../api/Model/AnswerApiModel";
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
      console.log(`${this.answer}:answer CREATE ERROR!`);
    }
  }

  @action
  async selectAllAnswer() {
    console.log("answer 스토어 selectall 메서드 도착!")
    let result = await this.answerApi.answerList();
    console.log("selectall 스토어리스트", result);
    if (result !== null) {
      this.answers = result;
    } else {
      console.log(`${this.answers}:answerList not found`);
    }
  }

  @action
  async selectAnswer(id) {
    this.answer = await this.answerApi.answerDetail(id);
    console.log("store에서 info 찍히나요?", this.answer);
    if (this.answer === null) {
      console.log(`answerSTroe selcetAnswer${id}: Not Found ERROR!!`);
    }
  }
}
