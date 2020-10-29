import React, { Component } from "react";
import { Container,Menu ,Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./scss/adminSide.scss";



class AdminSideMenu extends Component {
  // state = { activeItem: "member" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
   // const { activeItem } = this.props.menu;
    return (
<>
        <div className="admin-header">관리자페이지</div>
      <div className="admin-side">
        <div className="list">회원관리</div>
        <div className="list">신고게시판</div>
        <div className="list">공지사항관리</div>
        <div className="list">1:1문의관리</div>

     
      

        {/* <Segment.Group raised>
      
       <Menu vertical size="large">

        <Menu.Item
          name="member"
          //active={activeItem === "member"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/member"
        >
          회원관리
        </Menu.Item>
        <Menu.Item
          name="member"
         // active={activeItem === "report"}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/report"
        >
          신고게시판 
        </Menu.Item>
        <Menu.Item
          name="board"
         // active={activeItem === "board"}
          as={Link}
          to="/admin/board"
        >
          게시물관리
        </Menu.Item>
        <Menu.Item
          name="qna"
         // active={activeItem === "qna"}
          as={Link}
          to="/admin/qna-all"
          qna-a-write
        >
          1:1 문의 관리
          <Menu.Menu>
            <Menu.Item
              name="write"
            //  active={activeItem === "write"}
              as={Link}
              to="/admin/qna-all"
            >
              1:1 문의 내역 전체보기
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item
          name="info"
        >
          공지사항 관리
          <Menu.Menu>
            <Menu.Item
              name="info-list"
              as={Link}
              to="/admin/info-list"
            >
              Search
            </Menu.Item>
            <Menu.Item
              name="write"
              as={Link}
              to="/admin/info-write"
            >
              공지사항 작성
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
      </Segment.Group> */}
   </div>
   </>
    );
  }
}

export default AdminSideMenu;


