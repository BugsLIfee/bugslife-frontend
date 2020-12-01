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
    return this.infos ? this.infos.slice() : [];
  }

  @computed
  get getInfo() {
    return this.info ? this.info.slice() : {};
  }


  @action
  setInfoProp(name, value) {
    this.info = {
      ...this.info,
      [name]: value,
    };
  }

  @action
  async onAddInfo(infoObj) {
    infoObj = new InfoApiModel(infoObj);
    let result = await this.infoApi.infoCreate(infoObj);

  }

  @action
  async selectAllinfo() {
    let result = await this.infoApi.infoList();
    this.infos = result;
  }

  @action
  async deleteInfo(infoId){
    await this.infoApi.infoDelete(infoId);
  } 

  @action
  async selectInfo(id) {
    this.info = await this.infoApi.infoDetail(id);
  }

  @action
  async modifyInfo(infoObj){
    infoObj = new InfoApiModel(infoObj);
    await this.infoApi.infoModify(infoObj);
  }
}
