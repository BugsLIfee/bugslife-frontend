import { observable, computed, action } from "mobx";
import report_test_data from "../report_test_data";
import testData from "../../detail/testData";
import { CommentGroup } from "semantic-ui-react";

class ReportStore {

    testData = report_test_data;
    @observable report_list = testData.report_list;

    @computed get _report_list() {
        return this.report_list ? this.report_list.slice() : []
    }

}

export default ReportStore