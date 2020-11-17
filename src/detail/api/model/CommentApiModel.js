class AnswerApiModel {
    questionId = "";
    answerId = "";
    writerId = "";
    content = "";

    constructor(obj) {
        this.questionId = obj.questionId;
        this.answerId = obj.answerId;
        this.writerId = obj.writerId;
        this.content = obj.content;
    }
}

export default AnswerApiModel;