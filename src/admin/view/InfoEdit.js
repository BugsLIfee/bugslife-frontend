import React, { Component } from "react";
import "./scss/infoEdit.scss";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Input } from "semantic-ui-react";
export default class InfoEdit extends Component {
  render() {
    return (
      <div className="info_editor">
        <h2> 📢공지사항 작성 페이지 </h2>

        <form class="ui form">
          <div class="field">
            <label>제목</label>
            <input placeholder="공지사항 제목을 입력해주세요." />
          </div>

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
          <button type="submit" class="ui button">
            작성완료
          </button>
        </form>
      </div>
    );
  }
}
