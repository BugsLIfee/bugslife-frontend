class AnswerApiModel {
    questionId = "";
    writerId = "";
    content = "";

    constructor(obj) {
        this.questionId = obj.questionId;
        this.writerId = obj.writerId;
        this.content = obj.content;
    }
}

export default AnswerApiModel;