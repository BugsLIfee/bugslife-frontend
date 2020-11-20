class PostingApiModel{

    title = "";
    content = "";
    publicPost = "";
    writerId = "";
    point = 0;
    tags = [];

    constructor(postObj){
        this.title = postObj.title;
        this.content = postObj.content;
        this.publicPost = postObj.isPublic;
        this.writerId = postObj.writer;
        this.point = postObj.point;
        this.tags = postObj.tags;
    }
}

export default  PostingApiModel;