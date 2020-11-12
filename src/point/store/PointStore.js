import { observable, computed } from "mobx";
import testDate from "../testData";


class PointStore {

    @observable points = testDate;

    @computed get _points() {
        return this.points ? this.points.slice() : [];
    }
}

export default PointStore
