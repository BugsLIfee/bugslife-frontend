class FreebaordSubCommModel{
    constructor(subComment){
        this.id = subComment.id;
        this.commentId = subComment.commentId;
        this.content = subComment.content;
        this.registerDate = subComment.registerDate;
        this.isHide = subComment.isHide;
        this.reportCnt = subComment.reportCnt;
    }


}

export default FreebaordSubCommModel;