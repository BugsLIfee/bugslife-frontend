import FreeboardCommenetModel from "../comment/FreeboardCommentModel";

class FreeboardPostModel{

    constructor(post) {
        this.id = post.id
        this.cate = post.cate
        this.title = post.title
        this.content = post.content;
        this.registerDate = post.registerDate
        this.updateDate = post.updateDate
        this.isHide = post.isHide
        this.viewCnt = post.viewCnt
        this.reportCnt = post.reportCnt
        this.comments = post.comments.map(comment => new FreeboardCommenetModel(comment))

    }
    
}

export default FreeboardPostModel