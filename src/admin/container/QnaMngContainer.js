

import React, { Component } from "react";
import QnAList from "../view/QnAList";
import { inject, observer } from "mobx-react";
import qnadata from "../../contact/data/qna";
import qnaTypedata from "../../contact/data/qnaType";


@inject("Store")
@observer
class QnaMngContainer extends Component {
  render() {

  //  const { ListData, TypeData } = this.props.Store.admin;
    return (
      <div>
        <QnAList ListData={qnadata} TypeData={qnaTypedata} />
      </div>
    );
  }
}

export default QnaMngContainer;