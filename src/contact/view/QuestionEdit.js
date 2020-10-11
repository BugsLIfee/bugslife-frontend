import React, { Component } from "react";
//import "./scss/questionEdit.scss";
import { Form, Button } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";

export default class QuestionEdit extends Component {

  constructor(props){
    super(props)
    const {question} = this.props;
    this.state={
      writerId:question.writerId ? question.writerId : "test",
      categoryId:question.categoryId ? question.categoryId :"",
      registDate:question.registDate ? question.registDate : "",
      editDate:question.editDate ? question.editDate : "",
      title: question.title ? question.title : "",
      content:question.title ? question.title : "",
    }
  }
  
  nowDate =()=>{
    let now = new Date();
    now = moment(now).format('YYYY-MM-DD HH:mm:ss')
    return now;
  }

    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("------statechage:",this.state);
  }
  
  onsubmit=()=>{
    const {question} = this.props;
      this.setState({
        ...this.state,
        registDate: question.registDate? question.registDate:this.nowDate(),
        editDate:question.registDate? this.nowDate() : "",
        
      })
      console.log("onSubmitstate----", {...this.state});
    return {...this.state}
    }
  // this.setState({});
  render() {
    const {
      question,
      //onSetquestionProp,
      onAddQuestion,
      onRemoveQuestion,
      onModifyQuestion,
    } = this.props;
    
    const {writerId, registDate,editDate,content, title,categoryId} =this.state;


    return (
      <div>
        <h2>👀1:1 문의 작성 페이지 </h2>
        <Form>
            
            <Form.Input
            width={3}
            readOnly
               fluid
            label="작성자"
              name="writerId"
              value={writerId}
            />
            <Form.Select
            width={3}
            readOnly
               fluid
            label="문의종류"
              name="categoryId"
              value={categoryId}
            />
            {console.log("rg-?",registDate, editDate)}
            {registDate
           ? <Form.Input
           width={3}
               fluid readOnly
            label="작성일"
              name="registDate"
              value={registDate}
              
            />
    :""}
            {editDate?

            <Form.Input
            width={3}
               fluid readOnly
            label="수정일"
              name="editDate"
              value={editDate}
            />:""}
          
          <Form.Input
            width={6}
            fluid
            label="문의제목"
            placeholder="제목을 입력하세요"
            name="title"
           value= {title}
             onChange={(e) => this.handleChange(e)}
           // onChange={(e) => onSetquestionProp("title", e.target.value)}
          />
          <Form.Input
            width={6}
            fluid
            label="문의내용"
            placeholder="내용을 입력하세요"
            name="content"
           value= {content}
       onChange={(e) => this.handleChange(e)}
          />
        </Form>

       
        <Button primary onClick={()=>onAddQuestion(this.onsubmit())}>
          작성완료
        </Button>
        {question ? (
          <>
            <Button primary onClick={onRemoveQuestion}>
              삭제
            </Button>
            <Button primary onClick={onModifyQuestion}>
              수정
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}
