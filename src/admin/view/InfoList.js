import React, { Component } from "react";
import { Container, Pagination,  Icon } from "semantic-ui-react";
import "./scss/infoList.scss";
class InfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  setNextPage = (e) => {
    this.setState({
      page: e.target.getAttribute("value"),
    });
  };

  render() {
    const { ListData } = this.props;
    // console.log("listdata", ListData);

   const handleLink = (id) => {
    this.props.history.push("/admin/info-detail?id=" + id);
   };


    let listPageOne = ListData.slice(
      (this.state.page - 1) * 10,
      this.state.page * 10
    );

    let CreateTableRowList = listPageOne.map((obj,key) => (
      <div className="info_table_list_sec" key={key} onClick={()=>handleLink(`${obj.id}`)}>
        <div className="info_postId" >{obj.id}</div>
        {/* <div className="info_writer" >{obj.name}</div> */}
        <div className="info_postCate" > {obj.adminCategory}</div>
        <div className="info_postTitle" >{obj.title}</div>
        <div className="info_date" >
          {obj.editDate===null 
           ? `${obj.registDate}`
           : `${obj.editDate}`}
          </div>
        <div className="info_view">{obj.viewCnt}</div>
      </div>
    ));

    let totalPage = Math.floor(ListData.length / 10); //60건이라면 totalPage

    if (ListData.length % 10) {
      totalPage += 1;
    }
    return (
      <Container>
        <div className="info-header">
          <span className="info-header-span" role="img" aria-label="aria">
            <div className="info-title">
            <h3>
          <span role="img" aria-label="aria">
              📢 공지사항 목록
          </span>
              </h3>
            </div>
        
            <div className="write_btn_box">
            <a href="/admin/info-write"> <Icon name="pencil"/>공지사항 작성 </a>
            </div>
    
          </span>
        </div>
        <div className="infoList-container">
            <div className="infoList_header">
              <p>번호</p>
              {/* <p>작성자</p> */}
              <p>문의종류</p>
              <p>제목</p>
              <p>날짜</p>
              <p>조회수</p>
            </div>
            <div className="infoList_content">
               {CreateTableRowList}
            </div>
        </div>

      <div className="infoList-pagination">

      <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={2}
          onPageChange={this.setNextPage}
          totalPages={totalPage}
          style={{float: 'right'}}
          />
         

      </div>

      </Container>
    );
  }
}

export default InfoList;
