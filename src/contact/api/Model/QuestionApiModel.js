export default class QuestionApiModel {
 constructor(questionObj) {
	    this.id = questionObj.id;
		this.writerId = questionObj.writerId;
		this.categoryId = questionObj.categoryId;
		this.title = questionObj.title;
		this.content = questionObj.content;
		this.registDate = questionObj.registDate;
		this.editDate = questionObj.editDate;
		this.completed = questionObj.completed;
 }

}