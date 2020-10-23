import { observable, computed, action } from "mobx";
import PointApi from "../api/PointApi";
import testDate from "../testData";


class PointStore {

    @observable points = testDate;

    @computed get _points() {
        return this.points ? this.points.slice() : [];
    }
}

export default PointStore
