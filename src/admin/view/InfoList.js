import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Pagination, List } from "semantic-ui-react";

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
    const { ListData, TypeData } = this.props;
    console.log("listdata", ListData);
    console.log("typedata", TypeData);

    const MakeTypeName = (data) => {
      let typeObj = TypeData.find((obj) => obj.categoryId === data.category);
      let typeName = typeObj.categoryname;
      console.log("typeName==", typeName);
      return typeName;
    };

    let listPageOne = ListData.slice(
      (this.state.page - 1) * 10,
      this.state.page * 10
    );

    let CreateTableRowList = listPageOne.map((obj) => (
      <Table.Row>
        <Table.Cell width="1" as={Link} to="/info/detail?id={obj.id}">
          {obj.id}
        </Table.Cell>
        <Table.Cell width="2">{obj.userid}</Table.Cell>
        <Table.Cell width="3"> {MakeTypeName(obj)}</Table.Cell>
        <Table.Cell width="7">{obj.title}</Table.Cell>
        <Table.Cell width="3">{obj.regist_date}</Table.Cell>
      </Table.Row>
    ));

    let totalPage = Math.floor(ListData.length / 10); //60건이라면 totalPage

    if (ListData.length % 10) {
      totalPage += 1;
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>번호</Table.HeaderCell>
              <Table.HeaderCell>작성자</Table.HeaderCell>
              <Table.HeaderCell>문의종류</Table.HeaderCell>
              <Table.HeaderCell>제목</Table.HeaderCell>
              <Table.HeaderCell>등록일</Table.HeaderCell>
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
        />
      </Container>
    );
  }
}

export default InfoList;
