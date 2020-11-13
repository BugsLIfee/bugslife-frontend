class DetailApiModel{

    questionId = "";
    markDown = "";
    point = "";
    likes = "";
    registDate = "";
    view = "";
    body = "";
    post_id = "";

    constructor(questionId, markDown, point, likes, registDate, view, body, postId){
        this.questionId = questionId;
        this.markDown = markDown;
        this.point = point;
        this.likes = likes;
        this.registDate = registDate;
        this.view = view;
        this.body = body;
        this.post_id = postId;
    }
}
export default  DetailApiModel;