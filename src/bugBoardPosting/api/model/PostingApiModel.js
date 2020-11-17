class PostingApiModel{

    title = "";
    content = "";
    publicPost = "";
    writerId = ""
    point = 0;

    constructor(postObj){
        this.title = postObj.title;
        this.content = postObj.content;
        this.publicPost = postObj.isPublic;
        this.writerId = postObj.writer;
        this.point = 2000;
        // this.tags = tags;
    }
}

export default  PostingApiModel;