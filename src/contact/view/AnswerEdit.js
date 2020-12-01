import React, { Component } from "react";
//import "./scss/answerEdit.scss";
import { Form, Button } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";

export default class AnswerEdit extends Component {

  constructor(props){
    super(props)
    const {answer} = this.props;
    this.state={
      writerId:answer.writerId ? answer.writerId : "test",
      categoryId:answer.categoryId ? answer.categoryId :"",
      registDate:answer.registDate ? answer.registDate : "",
      editDate:answer.editDate ? answer.editDate : "",
      title: answer.title ? answer.title : "",
      content:answer.title ? answer.title : "",
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
  }
  
  onsubmit=()=>{
    const {answer} = this.props;
      this.setState({
        ...this.state,
        registDate: answer.registDate? answer.registDate:this.nowDate(),
        editDate:answer.registDate? this.nowDate() : "",
        
      })
    return {...this.state}
    }
  // this.setState({});
  render() {
    const {
      answer,
      //onSetanswerProp,
      onAddAnswer,
      onRemoveAnswer,
      onModifyAnswer,
    } = this.props;
    
    const {writerId, registDate,editDate,content, title,categoryId} =this.state;


    return (
      <div>
        <h2>1:1 문의 답변 작성 </h2>
        <Form>
            
            <Form.Input
            width={3}
            readOnly
               fluid
            label="작성자"
              name="writerId"
              value={writerId}
            />
            <Form.Input
            width={3}
            readOnly
               fluid
            label="문의종류"
              name="categoryId"
              value={categoryId}
            />
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
           // onChange={(e) => onSetanswerProp("title", e.target.value)}
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

       
        <Button primary onClick={()=>onAddAnswer(this.onsubmit())}>
          작성완료
        </Button>
        {answer ? (
          <>
            <Button primary onClick={onRemoveAnswer}>
              삭제
            </Button>
            <Button primary onClick={onModifyAnswer}>
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
