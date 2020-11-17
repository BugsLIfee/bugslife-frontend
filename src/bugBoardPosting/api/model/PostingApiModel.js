class PostingApiModel{

    title = "";
    content = "";
    publicPost = "";
    writer = ""
    point = 0;

    constructor(postObj){
        this.title = postObj.title;
        this.content = postObj.content;
        this.publicPost = postObj.isPublic;
        this.writer = postObj.writer;
        this.point = 2000;
        // this.writer = writer;
        // this.tags = tags;
    }
}

export default  PostingApiModel;