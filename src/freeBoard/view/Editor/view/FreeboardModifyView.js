import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import "./scss/posting.scss"


 const FreeboardModifyView=({
            post, category
    })=> {

   
const title = post.title
    // const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [cate, setCate] = useState(post.cate);
    const [updateDate, setUpdateDate] = useState("")

    const editorRef = React.createRef();

    console.log(post)
    // console.log(post.title)
    console.log(title, content,cate)
    // const onSubmitForm=()=>{
    //     let post = this.state;
        
    //     if(post.pwd === "" || post.pwd === undefined || post.pwd === null){
    //         return alert("유효하지 않은 비밀번호입니다.")
    //     }

    //     console.log(this.state.isValid);

    //     //비밃번호 유효성 검사
    //     if(this.state.isValid === true){   
    //         console.log("it is okay to post")
    //         // this.props.onCreatePost(post)
    //     }else{
    //         alert("비밀번호가 일치하지 않습니다.")
    //     }

    // }

   const selectCate=(e, data)=>{
        onSetDate()
        setCate(data.value)
    }

    const onSetDate=()=>{
        let today =  new Date();
        let Y =today.getFullYear()
        let M = today.getMonth();
        let D = today.getDate();
        return setUpdateDate(`${Y}-${M}-${D}`)
    }

//     const onValidationCheck=(event)=>{
//         let confirmed_pwd = event.target.value;

//         console.log(confirmed_pwd);
//         if(confirmed_pwd === this.state.pwd){
//             this.setState({...this.state, isValid : true})
//         }
//     }


    // const onWrting=(e)=>{
    //     console.log("=====onWriting====")
    //     this.setState({...this.state, title : e.target.value})
    //     console.log(this.state)
    //     this.props.onUpdate(this.state)
      
    //     console.log("state value change!!!!!plzzzz")
    //     console.log(this.state)
    // }

    //     const category = this.props.category;
    //     let originalPost = this.props.post;
        
    //     const onUpdate = this.props.onUpdate
    //     console.log("originalPost : ",originalPost)

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
                    <Dropdown placeholder='카테고리' search selection options={categoryOptions} onChange={selectCate} />
                    <input className="posting_header_title" value={title}
                      />
                    </div>

                   

                </div>
                <br />
                <br />
                <Editor
                    height="50rem"
                    initialEditType="wysiwyg"
                    previewStyle="vertical"
                    ref={editorRef}
                    onChange = {() => {
                        setContent(
                        editorRef.current.getInstance().getHtml()
                        )
                    }}
                />
          


                    <div className="posting_bottom">
                    <div className="posting_header_userInfo">
                        {/* <input className= "posting_userinfo_input posting_userInfo_id"  type="text" placeholder="닉네임"/> */}
                        <input onChange={(e)=> {this.setState({...this.state, pwd: e.target.value })}}  className= "posting_userinfo_input posting_userInfo_pwd"  type="password" placeholder="비밀번호"/>
                        <input onChange={(e)=> this.onValidationCheck(e)}  className= "posting_userinfo_input posting_userInfo_pwd" type="password" placeholder="비밀번호확인"/>
                    </div>

                    <div className="upload">
                    <button className="upload_btn" type="submit" onClick={()=>this.onSubmitForm()}> 
                        <h5>작성 완료</h5>
                    </button>
                </div>

                    </div>

            </form>
        )
                   
};

export default FreeboardModifyView