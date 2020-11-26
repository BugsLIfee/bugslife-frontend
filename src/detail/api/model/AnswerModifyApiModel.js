class AnswerModifyApiModel {
    id = "";
    registDate = "";
    questionId = "";
    writerId = "";
    content = "";

    constructor(obj) {
        this.id = obj.id;
        this.questionId = obj.questionId;
        this.writerId = obj.writerId;
        this.content = obj.content;
        this.registDate = obj.registDate;
    }
}

export default AnswerModifyApiModel;