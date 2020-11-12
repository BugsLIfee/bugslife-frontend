import React, { Component } from "react";
import { Container, Table, Pagination,  Icon } from "semantic-ui-react";
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
    console.log("listdata", ListData);

   const handleLink = (id) => {
    this.props.history.push("/admin/info-detail?id=" + id);
   };
    // const MakeTypeName = (data) => {
    //   let typeObj = TypeData.find((obj) => obj.categoryId === data.categoryId);
    //   let typeName = typeObj.categoryname;
    //   console.log("typeName==", typeName);
    //   return typeName;
    // };

    let listPageOne = ListData.slice(
      (this.state.page - 1) * 10,
      this.state.page * 10
    );

    let CreateTableRowList = listPageOne.map((obj,key) => (
      <Table.Row key={key} onClick={()=>handleLink(`${obj.id}`)}>
        <Table.Cell >{obj.id}</Table.Cell>
        <Table.Cell >{obj.user.name}</Table.Cell>
        <Table.Cell > {obj.adminCategory}</Table.Cell>
        <Table.Cell >{obj.title}</Table.Cell>
        <Table.Cell >
          {obj.editDate==="" 
           ? `작성일:${obj.registDate}`
           : `작성일:${obj.registDate}-수정일:${obj.editDate}`}
          </Table.Cell>
          <Table.Cell>{obj.viewCnt}</Table.Cell>
      </Table.Row>
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
            <a href="/admin/info-write">
            <div className="write_btn_box">
            <Icon name="pencil"/>공지사항 작성
            </div>
            </a>
            <br/><br/>
          </span>
        </div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell >번호</Table.HeaderCell>
              <Table.HeaderCell >작성자</Table.HeaderCell>
              <Table.HeaderCell >문의종류</Table.HeaderCell>
              <Table.HeaderCell >제목</Table.HeaderCell>
              <Table.HeaderCell >날짜</Table.HeaderCell>
              <Table.HeaderCell >조회수</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{CreateTableRowList}</Table.Body>
      </Table>
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
         
    
      </Container>
    );
  }
}

export default InfoList;
