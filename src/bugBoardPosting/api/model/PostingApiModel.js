class PostingApiModel{

    title = "";
    content = "";
    publicPost = "";
    dueDate = "";
    writerId = "";
    premium = false;
    point = 0;
    tags = [];

    constructor(postObj){
        this.title = postObj.title;
        this.content = postObj.content;
        this.premium = postObj.premium;
        this.publicPost = postObj.publicPost;
        this.writerId = postObj.writer;
        this.dueDate = postObj.dueDate;
        this.point = postObj.point;
        this.tags = postObj.tags;
    }
}

export default  PostingApiModel;