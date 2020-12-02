import React, { Component } from "react"
import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./scss/ListItem.scss"

const img = {
  width: "45px",
  height: "45px",
}
class ListViewMain extends Component {

  render() {
    const { listView, user } = this.props
    const tags = listView.tags.map((tag, index) => {
      return (
        <span className="tagFont" key={index}>
          <Badge variant="primary" >{tag}</Badge>{" "}
        </span>
      )
    })
    
    const userImage = user ? user.imageUrl : ""
    const dueDate = Math.floor((new Date(listView.dueDate+"T00:00:00").getTime() - new Date().getTime())
            /(1000*60*60*24)) + 1;
    return (
      <div className="item-center">
        <div className="inner">
          <div className="title">
            <Link to={`/detail/${listView.id}`} className="title">
              <h4>{listView.title} </h4>
            </Link>
    
          </div>
          <div className="date_premium">
          <span className="date">{listView.registDate.substring(0,10)}
          </span>
          { listView.premium ? 
              <h5 className="premium">
                <span role="img" aria-label="Description of the overall image">✨</span> Premium </h5>
              : <></>}
            </div>
          <span className="date">
            {dueDate < 0 ? <span className="over_due"> 마감됨 </span> : <span className="under_due"> D-{dueDate}</span>}
          </span>
          <div className="tab-box">
            <div className="tag-box">
              <span className="tagFont">
                {tags}
              </span>                                 
            </div>
            <div className="box-grade">
               <span className="btn-grade img">
                { userImage ? 
                  <img style={img} src={userImage} alt="userImg"></img> :
                  <img style={img} src="../logo/userIcon.png" alt="userImg"></img>
                }
              </span>
              { user ? 
              <span className="value">
                <a href={`/otherUser/${listView.writerId}`}>
                  <span className="name">{user.name}</span>
                </a>
                <span className="grade">Level {user.level } </span>
              </span> : <></>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListViewMain
