import React, { Component } from "react";
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./scss/posting.scss"


export default class FreeboardEditorView extends Component {

    render() {
        const category = this.props.category;
        const categoryOptions = category.map((category, ind) => {
            return ({
                key: category,
                text: category,
                value: category,
            }
            )
        })
        //console.log(categoryOptions)
        return(
            <div className="posting">
                <div className="posting_header">
                    <h2 className ="posting_title">자유게시판 글쓰기</h2>
                    <div className="posting_header_title_container">
                    <Dropdown placeholder='카테고리' search selection options={categoryOptions} />
                    <input className="posting_header_title" placeholder="제목을 입력해주세요" />
                    </div>

                   

                </div>
                <br />
                <br />
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



                    <div className="posting_bottom">
                    <div className="posting_header_userInfo">
                        {/* <input className= "posting_userinfo_input posting_userInfo_id"  type="text" placeholder="닉네임"/> */}
                        <input className= "posting_userinfo_input posting_userInfo_pwd"  type="password" placeholder="비밀번호"/>
                        <input className= "posting_userinfo_input posting_userInfo_pwd" type="password" placeholder="비밀번호확인"/>

                    </div>

                    <div className="upload">
                    <button className="upload_btn" type="submit"> 
                        <h5>작성 완료</h5>
                    </button>
                </div>

                    </div>

            </div>
        )
    }
}
