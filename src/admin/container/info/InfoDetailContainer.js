import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import InfoDetail from "../../view/InfoDetail";
import qs from "qs";

@inject("Store")
@observer
class InfoDetailContainer extends Component {
//  import queryStirng from 'query-string'

// const { search } = this.props.location;	// 문자열 형식으로 결과값이 반환된다.
// const queryObj = queryString.parse(search);	// 문자열의 쿼리스트링을 Object로 변환
componentDidMount=()=>{

  const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
  });

  this.props.Store.info.selectInfo(searchObj.id)

}


render() {

  const infoDetail = this.props.Store.info.info
  console.log(infoDetail)
  
  // info.selectInfo(searchObj.id);
  
  // console.log("infoDetailContainer-searchobj:", searchObj.id);
  // console.log("infoDetailContainer:", info.info);

    return (

     <InfoDetail  info = {infoDetail}/>
    );
  }
}

export default InfoDetailContainer;
