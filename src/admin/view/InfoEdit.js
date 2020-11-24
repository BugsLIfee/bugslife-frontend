import React, { Component } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import moment from "moment";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "./scss/infoEdit.scss"


export default class InfoEdit extends Component {

  constructor(props){
    super(props)
    var info = this.props.info;

    console.log("뭐넘겨주니..?",info);
    this.state={
      user: this.props.currentUser.id,
      username: info&&info.user? info.user.name :this.props.currentUser.name,
      category:info&&info.category ? info.category :"",
      registDate:info&&info.registDate ? info.registDate : "",
      editDate:info&& info.editDate ? info.editDate : "",
      title: info && info.title ? info.title : "",
      content : info.content
    }
  }
  
  editorRef = React.createRef();


  nowDate =()=>{
    let now = new Date();
    now = moment(now).format('YYYY-MM-DD HH:mm:ss')
    return now;
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    console.log("------statechange:",this.state);
  }

  selectCategory=(e, data)=>{
    console.log("categoray!!!!! ", data.value)
    this.setState({...this.state, category : data.value})

  }

  onModifyInfo=()=>{
    const {info} = this.props;
   
    if(this.state.category===undefined || this.state.category===""){
      return alert("카테고리를 선택해주세요.")
    }else{
      this.setState({
        ...this.state,
        registDate: info.registDate,
        user: this.props.currentUser.id,
      })

      this.props.onModifyInfo(this.state)

    }
  }

  onSubmitQna=()=>{
    const {info, currentUser} = this.props;
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    console.log(date)

    if(this.state.category===undefined || this.state.category===""){
      return alert("카테고리를 선택해주세요.")
    }else{
      this.setState({
        ...this.state,
        // registDate: info.registDate? info.registDate: date,
        editDate: date,
        user: this.props.currentUser.id,
      })
      
      
      console.log("onSubmitstate----", {...this.state});
      // return {...this.state}
      // this.props.onAddInfo({...this.state})

    }
  }

  onsubmit=()=>{
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    console.log(date)

    if(this.state.category===undefined || this.state.category===""){
      return alert("카테고리를 선택해주세요.")
    }else{
      this.setState({
        ...this.state,
        // registDate: info.registDate? info.registDate: date,
        editDate: date,
        user: this.props.currentUser.id,
      })
      
      console.log("onSubmitstate----", {...this.state});
      this.props.onAddInfo({...this.state})

    }
  }

  // this.setState({});
  render() {
    const {
      info,
      infoCategory,
      currentUser,
      selectUrl
    } = this.props;

   return (
      <div className="infoEdit_container">
        {selectUrl==="/contact/qna-write" ? (<h2>
          <span role="img" aria-label="aria">
          1:1 문의 작성
          </span>
          </h2>
        ) :
          (
          <h2>
          <span role="img" aria-label="aria">
            📢공지사항 작성 페이지 
          </span>
          </h2>
        
          )
        }
  
        <Form>
          <div className="infoEdit-info">
          <Form.Input
            width={3}
            readOnly
              fluid
              name="name"
              value={currentUser.name}
            />
            <Dropdown 
            placeholder='카테고리' 
            small
            selection 
            options={infoCategory}
            onChange={this.selectCategory} />
         
            {/* {registDate
           ? <Form.Input
              width={3}
              fluid readOnly
              label="작성일"
              name="registDate"
              value={info.registDate}
            />
            : ""}

            {editDate?
            <Form.Input
              width={3}
              fluid readOnly
              label="수정일"
              name="editDate"
              value={editDate}
            />
            :""}
           */}
            
             </div>

          <Form.Input
            width={6}
            fluid
            label="제목"
            placeholder="제목을 입력하세요"
            name="title"
            value = {this.state.title ===""|| this.state.title ===undefined ? info.title: this.state.title}
            onChange={ this.handleChange}
          />

        </Form>

      <div className="info_editor">
        {console.log(info.content, this.state.content==="")}
         <Editor
          height="50rem"
          initialEditType="wysiwyg"
          previewStyle="vertical"
          ref={this.editorRef}
          initialValue={info.content}
          // placeholder={ "공지사항을 입력해주세요."}
          onChange = {() => {
          this.setState({
           content: this.editorRef.current.getInstance().getHtml()
            })
          }}
          />

      </div>

       
        {info.id !== undefined ? (
          <>
            <Button primary onClick={this.onModifyInfo}>
              수정
            </Button>
          </>
        ) : (

          selectUrl ==="/contact/qna-write" ? 
          (<Button primary onClick={this.onSubmitQna}>
            작성완료
          </Button>
         )

          :
         (<Button primary onClick={()=>this.onsubmit()}>
           작성완료
          </Button>
         )
        )}
      </div>
    );
  }
}
