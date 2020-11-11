class FreeboardPostAddModel{
    constructor(post) {
        this.cate = post.cate
        this.title = post.title
        this.content = post.content;
        this.registerDate = post.registerDate
        this.updateDate = post.updateDate
        this.pwd = post.pwd
        this.isHide = post.isHide
        this.viewCnt = post.viewCnt
        this.reportCnt = post.reportCnt
    }

}

export default FreeboardPostAddModel;