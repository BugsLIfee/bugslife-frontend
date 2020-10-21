import { observable, computed, action } from "mobx";
import ReportApi from "../api/ReportApi";
import testDate from "../testData";


class ReportStore {

    @observable category = testDate;

    @computed get _category() {
        return this.category ? this.category.slice() : [];
    }
}

export default ReportStore 
