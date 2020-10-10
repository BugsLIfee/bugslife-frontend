import { observable, computed, action } from "mobx";
import InfoApiModel from "../api/model/InfoApiModel";
import InfoApi from "../api/InfoApi.js";

export default class InfoStore {
  infoApi = new InfoApi();

  @observable
  infos = [];

  @observable
  info = {};

  @computed
  get getInfos() {
    return this.info ? this.infos.slice() : [];
  }

  @computed
  get getInfo() {
    return this.info ? { ...this.info } : {};
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
  async selectAllInfo() {
    let result = await this.infoApi.infoList();
    if (result !== null) {
      this.info = result;
    } else {
      console.log(`${this.todo.todoNum}:TODO CREATE ERROR!`);
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
