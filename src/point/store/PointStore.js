import { observable, computed, action } from "mobx";
import PointApi from "../api/PointApi";
import PointApiModel from "../api/model/PointApiModel";

class PointStore {

    pointApi = new PointApi();
    @observable pointList=[];

    @computed
    get _pointList() {
        return this.pointList ? this.pointList.slice() : [];
    }

    @action
    async getAllList() {
        this.pointList = await this.pointApi.pointList()
    }

    @action
    async onAddPoint(pointObj) {
        pointObj = new PointApiModel(pointObj);
        await this.pointApi.pointCreate(pointObj);
    }
}

export default PointStore
