class PointApiModel{

    amount = 0;
    detail = "";
    userId = "";

    constructor(pointObj){
        this.amount = pointObj.amout;
        this.detail = pointObj.detail;
        this.userId = pointObj.userId;
    }
}
export default PointApiModel;

