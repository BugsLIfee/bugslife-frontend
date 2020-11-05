class PostingApiModel{

    title = "";
    content = "";
    isPublic = "";
    writer = "";

    constructor(title, content, isPublic, writer){
        this.title = title;
        this.content = content;
        this.isPublic = isPublic;
        this.writer = writer;
    }
}
export default  PostingApiModel;