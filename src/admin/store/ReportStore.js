import { observable, computed, action } from "mobx";
import report_test_data from "../report_test_data";

class ReportStore {

    @observable report_list = report_test_data;

    @computed get _report_list() {
        return this.report_list ? this.report_list.slice() : []
    }

    @action receipt_report(id, is_blind) {
        this.report_list = this.report_list.map(report => {
            if(report.id === id ){
                report.is_blind = is_blind;
                report.is_done = true;
                return report;
            }
            return report;
        })
    }
}

export default ReportStore