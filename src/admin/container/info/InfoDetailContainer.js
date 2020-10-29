import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import InfoDetail from "../../view/InfoDetail";

@inject("Store")
@observer
class InfoDetailContainer extends Component {
//  import queryStirng from 'query-string'

// const { search } = this.props.location;	// 문자열 형식으로 결과값이 반환된다.
// const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환

// const { id, author } = queryObj;
render() {
  const { info} = this.props.Store;
  const { searchObj } = this.props;
  
  info.selectInfo(searchObj.id);
  
  console.log("infoDetailContainer-searchobj:", searchObj.id);
  console.log("infoDetailContainer:", info.getInfo);

    return (
     <InfoDetail info={info.getInfo} />
    );
  }
}

export default InfoDetailContainer;
