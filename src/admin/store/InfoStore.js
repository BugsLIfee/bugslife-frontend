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
    console.log("before:",infoObj);
    infoObj = new InfoApiModel(infoObj);
    console.log("after:",infoObj);
    let result = await this.infoApi.infoCreate(InfoApiModel);
    if (result === null) {
      console.log(`${this.InfoApiModel.id}:info CREATE ERROR!`);
    }else{
      console.log(result,": 입력 성공 ! ! ");
    }
  }

  @action
  async selectAllinfo(CurrentUser) {
    let result = await this.infoApi.infoList(CurrentUser);
    this.infos = result;
    console.log("infoList in infoStore ::", this.infos);

  }

  @action
  async selectInfo(id) {
    this.info = await this.infoApi.infoDetail(id);
    console.log("info in infoStore ::", this.info);
  }
}
