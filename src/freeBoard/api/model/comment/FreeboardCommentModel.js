import FreeboardSubCommModel from "./FreeboardSubCommModel"

class FreeboardCommenetModel{
    constructor(comment){
        this.id = comment.id;
        this.postId = comment.postId
        this.content = comment.content
        this.registerDate =comment.registerDate
        this.isHide = comment.isHide
        this.reportCnt = comment.reportCnt;
        this.subComments = comment.subComments.map(sub=> new FreeboardSubCommModel(sub));
    }
};

export default FreeboardCommenetModel;