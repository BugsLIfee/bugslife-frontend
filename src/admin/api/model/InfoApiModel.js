class InfoApiModel{
    id="";
    writer="";
    title="";
    content="";
    categoryId="";
    registDate="";
    editDate="";
    constructor(id, categoryId, writer, title, content,registDate,editDate){
        this.id= id;
        this.categoryId = categoryId;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.registDate = registDate;
        this.editDate = editDate;

    }

}
export default  InfoApiModel;