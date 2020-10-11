import React, { Component } from "react";
import "../scss/addAnswer.scss"
import { Button } from "semantic-ui-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class AddAnswerView extends Component {

    render() {

        const { onInsertForm } = this.props;

        return(
            <div className="detail_answer_editor">
                <p> # 답변작성 </p>
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
                <div className="posting_answer">
                    <Button basic color='white' className="bt" size='huge' onClick={()=> {onInsertForm()}}> 
                        뒤로가기
                    </Button>
                    <Button basic color='gray' className="bt" size='huge'> 
                        완료
                    </Button>
                </div>
            </div>
        )
    }
}