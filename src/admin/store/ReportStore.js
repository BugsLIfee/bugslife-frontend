import { observable, computed, action } from "mobx";
import report_test_data from "../report_test_data";

class ReportStore {

    @observable report_list = report_test_data;

    @computed get _report_list() {
        return this.report_list ? this.report_list.slice() : []
    }
}

export default ReportStore