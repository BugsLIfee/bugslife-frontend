class AnswerApiModel {
    questionId = "";
    answerId = "";
    writer = "";
    content = "";

    constructor(obj) {
        this.questionId = obj.questionId;
        this.answerId = obj.answerId;
        this.writer = obj.writer;
        this.content = obj.content;
    }
}

export default AnswerApiModel;