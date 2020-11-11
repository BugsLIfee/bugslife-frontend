class FreeboardCommentAddModel{
    constructor(comment){
        this.postId = comment.postId
        this.content = comment.content
        this.writer = comment.writer
        this.registerDate =comment.registerDate
        this.isHide = comment.isHide
        this.reportCnt = comment.reportCnt;
        this.pwd = comment.pwd
    }

}

export default FreeboardCommentAddModel;