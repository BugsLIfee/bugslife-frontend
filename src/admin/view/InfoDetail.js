import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class InfoDetail extends Component {
    render() {
        const {info, onDelete} = this.props;
        return (
          <div>
            <div>{info.id}</div>
            <div>{info.writerId}</div>
            <div>{info.title}</div>
            <div>{info.content}</div>
            <div>{info.registDate}</div>
            <div>{info.viewCnt}</div>
            <Button as={Link} to="/admin/info-write">수정하기</Button>
            <Button onClick={() => onDelete(info.id)}>삭제하기</Button>
          </div>
        );
    }
}

export default InfoDetail;