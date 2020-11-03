class InfoApiModel{
    id="";
    writer="";
    title="";
    content="";
    adminCategory="";
    registDate="";
    editDate="";

    constructor(id, adminCategory, writer, title, content,registDate,editDate){
        this.id= id;
        this.adminCategory = adminCategory;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.registDate = registDate;
        this.editDate = editDate;

    }

}
export default  InfoApiModel;