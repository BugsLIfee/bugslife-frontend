import React, { Component } from "react";
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import "./scss/posting.scss"



export default class FreeboardEditorView extends Component {
    state=(
        { 
            cate : "",
            title : "",
            content  : "",
            registerDate : "",
            updateDate : "",
            isHide : false,
            viewCnt : 0,
            pwd : "",
            likes: 0,
            reportCnt: 0,
            isValid: false
        }
    )

    editorRef = React.createRef();


    // onSubmitForm(event){
    //    
    //     let post = {};
    //     post["cate"] = "";
    //     post["title"] = "";
    //     post["content"] = "";
    //     post["registerDate"] = "";
    //     post["updateDate"] = "";
    //     post["isHide"] = false;
    //     post["viewCnt"] = 0;
    //     post["pwd"] = "";
    //     post["likes"] = "";
    //     post["content"] = "";
    // }


    onSubmitForm=()=>{

        let post = this.state;
        
        if(post.pwd === "" || post.pwd === undefined || post.pwd === null){
            return alert("유효하지 않은 비밀번호입니다.")
        }

        console.log(this.state.isValid);

        //비밃번호 유효성 검사
        if(this.state.isValid === true){   
            console.log("it is okay to post")
            this.props.onCreatePost(post)
        }else{
            alert("비밀번호가 일치하지 않습니다.")
        }

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
        return this.setState({...this.state, registerDate : `${Y}-${M}-${D}`, updateDate:`${Y}-${M}-${D}` })
    }

    onValidationCheck=(event)=>{
        let confirmed_pwd = event.target.value;

        console.log(confirmed_pwd);

        if(confirmed_pwd === this.state.pwd){
            this.setState({...this.state, isValid : true})
        }
    }



    render() {
        const category = this.props.category;
        const onCreatePost = this.props.onCreatePost
        const categoryOptions = category.map((category, ind) => {
            
            // category.onClick
             return ({
                key: ind,
                text: category,
                value: category,
                }
            )
        })

        console.log(this.state)
        return(
            <div className="posting">
                <div className="posting_header">
                    <h2 className ="posting_title">자유게시판 글쓰기</h2>
                    <div className="posting_header_title_container">
                    <Dropdown placeholder='카테고리' search selection options={categoryOptions} onChange={this.selectCate} />
                    <input className="posting_header_title" placeholder="제목을 입력해주세요" onChange={(e)=> {this.setState({...this.state, title: e.target.value })}}/>
                    </div>

                   

                </div>
                <br />
                <br />
                <Editor
                    height="50rem"
                    initialEditType="wysiwyg"
                    previewStyle="vertical"
                    ref={this.editorRef}
                    onChange = {() => {
                        this.setState({
                            content: this.editorRef.current.getInstance().getHtml()
                        })
                    }}
                />
          


                    <div className="posting_bottom">
                    <div className="posting_header_userInfo">
                        {/* <input className= "posting_userinfo_input posting_userInfo_id"  type="text" placeholder="닉네임"/> */}
                        <input onChange={(e)=> {this.setState({...this.state, pwd: e.target.value })}} className= "posting_userinfo_input posting_userInfo_pwd"  type="password" placeholder="비밀번호"/>
                        <input onChange={(e)=> this.onValidationCheck(e)}  className= "posting_userinfo_input posting_userInfo_pwd" type="password" placeholder="비밀번호확인"/>
                    </div>

                    <div className="upload">
                    <button className="upload_btn" type="submit" onClick={()=>this.onSubmitForm()}> 
                        <h5>작성 완료</h5>
                    </button>
                </div>

                    </div>

            </div>
        )
    }
}
