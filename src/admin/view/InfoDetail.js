import React, { Component } from 'react';

class InfoDetail extends Component {
    render() {
        const info = this.props.info;
        return (
          <div>
            <div>{info.id}</div>
            <div>{info.writerId}</div>
            <div>{info.title}</div>
            <div>{info.content}</div>
            <div>{info.registDate}</div>
            <div>{info.viewCnt}</div>
          </div>
        );
    }
}

export default InfoDetail;