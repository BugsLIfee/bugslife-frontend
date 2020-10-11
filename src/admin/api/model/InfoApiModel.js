class InfoApiModel{
    id="";
    category="";
    writer="";
    title="";
    content="";
    regist_date="";
    constructor(id, category, writer, title, content,regist_date){
        this.id= id;
        this.category = category;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.regist_date = regist_date;

    }

}
export default  InfoApiModel;