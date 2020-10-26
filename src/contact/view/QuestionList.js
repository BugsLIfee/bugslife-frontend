import React, { Component } from "react";
import { Container, Table, Pagination, List } from "semantic-ui-react";

class QuestionList extends Component {
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
     
      let typeObj = TypeData.find((obj) => (obj.id === data.categoryId));
      console.log("typeObj=> ",typeObj)
      let typeName = typeObj.name;
      console.log("typeName==", typeName);
      return typeName;
    };

    let listPageOne = ListData.slice(
      (this.state.page - 1) * 10,
      this.state.page * 10
    );

    let CreateTableRowList = listPageOne.map((qna) => (
      <Table.Row href={`/${qna.id}`}>
        <Table.Cell width="1">{qna.completed}</Table.Cell>
        <Table.Cell width="1">{qna.id}</Table.Cell>
        <Table.Cell width="2">{qna.writerId}</Table.Cell>
        <Table.Cell width="2"> {MakeTypeName(qna)}</Table.Cell>
        <Table.Cell width="7">{qna.title}</Table.Cell>
        <Table.Cell width="3">{qna.regist_date}</Table.Cell>
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

export default QuestionList;
