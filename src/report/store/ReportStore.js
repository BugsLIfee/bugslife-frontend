import { observable, computed } from "mobx";
import testDate from "../testData";


class ReportStore {

    @observable category = testDate;

    @computed get _category() {
        return this.category ? this.category.slice() : [];
    }
}

export default ReportStore 
