import React, { Component } from 'react'
import "./scss/MemberList.scss"

export default class Memberlistview extends Component {

    
    render() {
        let user = this.props.user
        
        return (
            <div className="admin-member-list-detail">
                <div className="admin-member-detail-sec">
                    <input type="checkbox" name={user.id}/>
              </div>
              <div className="admin-member-detail-sec">
                <p>{user.id}</p>
              </div>
              <div className="admin-member-detail-sec">
                <p>{user.name}</p>
              </div>
              <div className="admin-member-detail-sec">
                <p>{user.email}</p>
              </div>
              <div className="admin-member-detail-sec">
                 <p>{user.enrollDate}</p>
              </div>
              <div className="admin-member-detail-sec">
                <p>{user.status}</p>
              </div>
              <div className="admin-member-detail-sec">
                <p>보유 포인트</p>
              </div>
            </div>
        )
    }
}
