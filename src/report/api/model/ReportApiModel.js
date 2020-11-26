class ReportApiModel{

    boardType = "";
    reportDetail = "";
    reportType = "";
    boardId = 0;


    constructor(reportObj){
        this.boardType = reportObj.boardType;
        this.reportDetail = reportObj.reportDetail;
        this.reportType = reportObj.reportType;
        this.boardId = reportObj.boardId;
    }
}
export default ReportApiModel;