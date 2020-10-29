import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./scss/adminPage.scss";
class AdminPage extends Component {
  render() {
  return (
    <div className="root">

      

      
      <Drawer
        className="drawer"
        variant="permanent"
      >
        <AppBar className="appBar">
          <Toolbar>
          <Typography variant="h6" noWrap>
            관리자 페이지
          </Typography>
        </Toolbar>
        </AppBar>
        <div className="drawerContainer">
          <List>
              <ListItem button>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary="회원관리" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="신고게시판" />
              </ListItem>
              <Divider/>
              <ListItem button>
                <ListItemText primary="공지사항관리" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="1:1문의 관리" />
              </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>


      <main >
          hihi
      </main>
    </div>
  );
}
}
export default AdminPage ;