import React,{Component} from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "./scss/posting.scss"
import swal from 'sweetalert';

 class FreeboardModifyClassViews extends Component{
     constructor(props){
         super(props)
         console.log(this.props.post)
         this.state={
            title: this.props.post.title,
            content: this.props.post.content,
            cate:  this.props.post.cate,
            updateDate: this.props.post.updateDate,
            pwd:""
         }
     }


    editorRef = React.createRef();

    onSubmitForm= ()=>{
        let post = this.state;


        if(post.title=== ""){
            swal("😥 ","제목을 입력해주세요.","warning");
        }
        if(post.pwd === "" || post.pwd === undefined || post.pwd === null){
            swal("😥 ","유효하지 않은 비밀번호입니다.","warning");
        }

        console.log(this.state.isValid);

        //비밃번호 유효성 검사
        if(this.state.isValid === true){   
            console.log("it is okay to post")
            // this.props.onCreatePost(post)
        }else{
            swal("🚫","비밀번호가 일치하지 않습니다.","warning");
        }

        this.props.onUpdate(this.state)

    }

    selectCate=(e, data)=>{
        this.onSetDate()
        this.setState({cate : data.value})
    }

    onSetDate=()=>{
        let today =  new Date();
        let Y =today.getFullYear()
        let M = today.getMonth();
        let D = today.getDate();
        return this.setState({...this.state, updateDate:`${Y}-${M}-${D}` })
    }

    onValidationCheck=(event)=>{
        let confirmed_pwd = event.target.value;

        console.log(confirmed_pwd);

        if(confirmed_pwd === this.state.pwd){
            this.setState({...this.state, isValid : true})
        }
    }


    onChangeTitle = (e) =>{
        this.setState({...this.state, title: e.target.value} )
    } 


    render() {
        console.log(this.state)

        const category = this.props.category;

        const categoryOptions = category.map((category, ind) => {
            // category.onClick
             return ({
                key: ind,
                text: category,
                value: category,
                }
            )
        })

        return(
            <form className="posting">
                <div className="posting_header">
                    <h2 className ="posting_title">자유게시판 글쓰기</h2>
                    <div className="posting_header_title_container">
                    <Dropdown placeholder='카테고리' search selection options={categoryOptions} onChange={this.selectCate} />
                    <input className="posting_header_title" 
                        type="data"
                        value = {this.state.title ? this.state.title : this.state.title === "" ? "" : this.props.post.title}
                        onChange={this.onChangeTitle} />
                    </div>

                   

                </div>
                <br />
                <br />
                <Editor
                    height="50rem"
                    initialEditType="wysiwyg"
                    previewStyle="vertical"
                    ref={this.editorRef}
                    placeholder={ "수정사항을 입력해주세요."}
                    value ={ this.state.content ? this.state.content : this.props.post.content}
                    onChange = {() => {
                        this.setState({
                            content: this.editorRef.current.getInstance().getHtml()
                        })
                    }}
                />
          


                    <div className="posting_bottom">
                    <div className="posting_header_userInfo">
                        {/* <input className= "posting_userinfo_input posting_userInfo_id"  type="text" placeholder="닉네임"/> */}
                        <input onChange={(e)=> {this.setState({...this.state, pwd: e.target.value })}}  className= "posting_userinfo_input posting_userInfo_pwd"  type="password" placeholder="비밀번호"/>
                        <input onChange={(e)=> this.onValidationCheck(e)}  className= "posting_userinfo_input posting_userInfo_pwd" type="password" placeholder="비밀번호확인"/>
                    </div>

                    <div className="upload">
                    <button className="upload_btn"  type="submit" onClick={()=>this.onSubmitForm()}> 
                        <h5>작성 완료</h5>
                    </button>
                </div>

                    </div>

            </form>
        )
    }
}
export default FreeboardModifyClassViews
