import { observable, computed, action } from "mobx";
import InfoApiModel from "../api/model/InfoApiModel";
import InfoApi from "../api/InfoApi.js";
import infotype from "../../contact/data/category";

export default class InfoStore {
  infoApi = new InfoApi();

  @observable
  infos = [];

  @observable
  info = {};

  @observable
  infoType = {};


  @computed
  get getInfos() {
    return this.infos ? this.infos.slice() : [];
  }

  @computed
  get getInfo() {
    return this.info ? { ...this.info } : {};
  }
  @computed
  get getInfoType() {
    return this.infoType ? { ...this.infoType } : infotype;
  }

  @action
  setInfoProp(name, value) {
    this.info = {
      ...this.info,
      [name]: value,
    };
  }

  @action
  async onAddInfo(InfoApiModel) {
    let result = await this.infoApi.infoCreate(InfoApiModel);
    if (result === null) {
      console.log(`${this.todo.todoNum}:TODO CREATE ERROR!`);
    }
  }

  @action
  async selectAllinfo(CurrentUser) {
    console.log("selectall 스토어 도착!")
    let result = await this.infoApi.infoList(CurrentUser);
    console.log("selectall 스토어리스트", result);
    if (result !== null) {
      this.infos = result;
    } else {
      console.log( `공지사항 ERROR!`);
    }
  }

  @action
  async selectInfo(id) {
    this.info = await this.infoApi.infoDetail(id);
    console.log("store에서 info 찍히나요?", this.info);
    if (this.info === null) {
      console.log(`${id}: Not Found ERROR!!`);
    }
  }
}
