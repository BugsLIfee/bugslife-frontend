class DetailApiModel{

    questionId = "";
    markDown = "";
    point = "";
    likes = "";
    registDate = "";
    views = "";
    body = "";
    post_id = "";

    constructor(questionId, markDown, point, likes, registDate, views, body, postId){
        this.questionId = questionId;
        this.markDown = markDown;
        this.point = point;
        this.likes = likes;
        this.registDate = registDate;
        this.views = views;
        this.body = body;
        this.post_id = postId;
    }
}
export default  DetailApiModel;