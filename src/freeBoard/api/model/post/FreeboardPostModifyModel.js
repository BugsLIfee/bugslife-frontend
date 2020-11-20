class FreeboardPostModifyModel{
    constructor(post) {
        this.id= post.id
        this.cate = post.cate
        this.title = post.title
        this.content = post.content;
        this.updateDate = post.updateDate;
        this.pwd = post.pwd;
    }
}
export default FreeboardPostModifyModel;