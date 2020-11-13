class AnswerApiModel {
    questionId = "";
    writer = "";
    content = "";

    constructor(questionId, writer, content) {
        this.questionId = questionId;
        this.writer = writer;
        this.content = content;
    }
}

export default AnswerApiModel;