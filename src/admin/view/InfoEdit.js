import React, { Component } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";

export default class InfoEdit extends Component {

  constructor(props){
    super(props)
    var info = this.props;

    console.log("뭐넘겨주니..?",this.props);
    this.state={
      user:"",
      username: info&&info.user? info.user.name :this.props.currentUser.name,
      category:info&&info.category ? info.category :"",
      registDate:info&&info.registDate ? info.registDate : "",
      editDate:info&&info.editDate ? info.editDate : "",
      title: info&&info.title ? info.title : "",
      content:info&&info.title ? info.title : "",
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
    console.log("------statechange:",this.state);
  }
  selectCategory=()=>{

  }
  onsubmit=()=>{
    const {info, currentUser} = this.props;
      this.setState({
        ...this.state,
        registDate: info.registDate? info.registDate:this.nowDate(),
        editDate:info.registDate? this.nowDate() : "",
        user:{...currentUser.id}
      })
      console.log("onSubmitstate----", {...this.state});
    return {...this.state}
    }
  // this.setState({});
  render() {
    const {
      info,
      infoCategory ,
      currentUser,
      //onSetInfoProp,
      onAddInfo,
      onRemoveInfo,
      onModifyInfo,
    } = this.props;
    console.log(infoCategory);
    const { registDate,editDate,content, title} =this.state;
   return (
      <div>
        <h2>
            <span role="img" aria-label="aria">
          📢공지사항 작성 페이지 
          </span>
          </h2>
        <Form>
            
            <Form.Input
            width={3}
            readOnly
               fluid
            label="운영팀"
              name="name"
              value={currentUser.name}
            />
            <Dropdown 
            placeholder='카테고리' 
            small
            selection 
            options={infoCategory}
            onChange={this.selectCategory} />
         
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
            />
            :""}
          
          <Form.Input
            width={6}
            fluid
            label="제목"
            placeholder="제목을 입력하세요"
            name="title"
           value= {title}
             onChange={(e) => this.handleChange(e)}
           // onChange={(e) => onSetInfoProp("title", e.target.value)}
          />
          <Form.Input
            width={6}
            fluid
            label="본문"
            placeholder="본문을 입력하세요"
            name="content"
           value= {content}
       onChange={(e) => this.handleChange(e)}
          />
        </Form>

        <CKEditor
          className="ckEditor"
          editor={ClassicEditor}
          onInit={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <Button primary onClick={()=>onAddInfo(this.onsubmit())}>
          작성완료
        </Button>
        {info ? (
          <>
            <Button primary onClick={onRemoveInfo}>
              삭제
            </Button>
            <Button primary onClick={onModifyInfo}>
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
