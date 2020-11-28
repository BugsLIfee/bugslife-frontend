class PostingApiModel{

    id = "";
    title = "";
    content = "";
    publicPost = "";
    registDate = "";
    dueDate = "";
    writerId = "";
    premium = false;
    point = 0;
    likes = 0;
    tags = [];
    reportCnt = 0;
    view = 0;



    constructor(postObj){
        this.id = postObj.id;
        this.dueDate = postObj.dueDate;
        this.likes = postObj.likes;
        this.title = postObj.title;
        this.content = postObj.content;
        this.premium = postObj.premium;
        this.publicPost = postObj.publicPost;
        this.writerId = postObj.writerId;
        this.registDate = postObj.registDate;
        this.point = postObj.point;
        this.tags = postObj.tags;
        this.reportCnt = postObj.reportCnt;
    }
}

export default  PostingApiModel;