import React, { Component } from "react";
import "../scss/addAnswer.scss"
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class AddAnswerView extends Component {

    render() {

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
            </div>
        )
    }
}