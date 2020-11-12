class PostingApiModel{

    title = "";
    content = "";
    isPublic = "";
    // writer = "";
    // tags = "";

    constructor(postObj){
        this.title = postObj.title;
        this.content = postObj.content;
        this.isPublic = postObj.isPublic;
        // this.writer = writer;
        // this.tags = tags;
    }
}

export default  PostingApiModel;