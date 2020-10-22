import React, { Component } from "react";
import faker from 'faker'
import _ from 'lodash'
import { Dropdown, Input, Button, CardGroup } from 'semantic-ui-react'
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./scss/posting.scss"


export default class FreeboardEditorView extends Component {

    render() {
        const category = this.props.category;
        const categoryOptions = category.map((category, ind) => 
            ({
                key: category[ind],
                text: category,
                value: category[ind],
            }))

        return(
            <div className="posting">
                <div className="posting_header">
                    <div className="posting_header_title_container">
                    <Dropdown placeholder='카테고리' search selection options={categoryOptions} />
                    <input className="posting_header_title" placeholder="제목을 입력해주세요" />
                    </div>

                    <div className="posting_header_userInfo">
                        <input className= "posting_userinfo_input posting_userInfo_id" value="" type="text" placeholder="닉네임"/>
                        <input className= "posting_userinfo_input posting_userInfo_pwd" value="" type="password" placeholder="비밀번호"/>
                        <input className= "posting_userinfo_input posting_userInfo_pwd" value="" type="password" placeholder="비밀번호확인"/>

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
                <br />
                <br />
                <hr />
                
                <div className="upload">
                    <Button basic color='black' className="bt" size='huge'> 
                        완료
                    </Button>
                </div>
            </div>
        )
    }
}
