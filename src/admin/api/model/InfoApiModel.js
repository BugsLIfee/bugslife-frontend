class InfoApiModel{
    constructor(infoPost){
        this.id= infoPost.id;
        this.adminCategory = infoPost.category;
        this.writerId = infoPost.user;
        this.title = infoPost.title;
        this.content = infoPost.content;
        this.registDate = infoPost.registDate;
        this.editDate = infoPost.editDate;
    }

}
export default  InfoApiModel;