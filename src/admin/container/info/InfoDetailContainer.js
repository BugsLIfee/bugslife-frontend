import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import InfoDetail from "../../view/InfoDetail";
import qs from "qs";
import "../../view/scss/infoDetailContainer.scss"
import Swal from 'sweetalert2'

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


onRemoveInfo = () => {
  let infoData =this.props.Store.info.info
  Swal.fire({
    title: '게시글을 삭제하시겠습니까?',
    showDenyButton: true,
    icon:'question',
    // showCancelButton: true,
    confirmButtonText: `삭제`,
    denyButtonText: `취소`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('삭제완료!', '', 'success')
      this.props.Store.info.deleteInfo(infoData.id);

      this.props.history.push({
        pathname: `/admin/info-list`
    });

    window.location.reload();
    

    } else if (result.isDenied) {
      Swal.fire('삭제가 취소되었습니다.', '', 'info')
    }
  })

  // swal("삭제완료!","공지사항이 삭제되었습니다!","success");
};


render() {
  const oauth = this.props.Store.oauth;
  const user = oauth.getCurrentUserInfo
  const infoDetail = this.props.Store.info.info

    return (
      <div className="infoDetail_wrap">
      <div className="infoDetail_title"><h1>공지사항</h1></div>

        <div className="infoDetail_postcontainer">
           <InfoDetail user={user.role} onDelete={this.onRemoveInfo} info={infoDetail} />
        </div>

     </div>
    );
  }
}

export default InfoDetailContainer;
