import { observable, computed, action } from "mobx";
import ReportApi from "../api/ReportApi";
import ReportApiModel from "../api/model/ReportApiModel"

class ReportStore {

    category = ["영리목적/홍보성", "개인정보노출" ,"불법정보", "음란성/선정성", "욕설/인신공격", "같은 내용 반복(도배)", "기타"];
    reportApi = new ReportApi();
    @observable reportList = [];

    @computed get _category() {
        return this.category ? this.category.slice() : [];
    }

    @computed get _report_list() {
        return this.reportList ? this.reportList.slice() : [];
    }

    @action
    async getAllList() {
        this.reportList = await this.reportApi.reportList()
    }

    @action
    async onAddReport(reportObj) {
        reportObj = new ReportApiModel(reportObj);
        await this.reportApi.reportCreate(reportObj);
        return true
    }

    @action
    async receipt_report(id, is_blind) {
        console.log("비포", this.reportList)
        this.reportList = this.reportList.map(report => {
            if(report.id === id ){
                report.done = true;
                return report;
            }
            return report;
        })
        console.log("애푸터",this.reportList)
        await this.reportApi.reportDone(id);
    }
}

export default ReportStore 
