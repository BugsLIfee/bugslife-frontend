class ReportApiModel{

    boardType = "";
    reportDetail = "";
    reportType = "";

    constructor(reportObj){
        this.boardType = reportObj.boardType;
        this.reportDetail = reportObj.reportDetail;
        this.reportType = reportObj.reportType;
    }
}
export default ReportApiModel;