import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InfoEdit from "../view/InfoEdit";

export default class InfoEditContainer extends Component {
  render() {
    return (
      <div>
        <InfoEdit />
      </div>
    );
  }
}
