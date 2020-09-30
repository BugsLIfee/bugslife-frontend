import React, { Component } from 'react';
import { Input } from "semantic-ui-react";

class MemberList extends Component {
  render() {
    return (
      <div>
        <Input icon="search" placeholder="Search mail..." />
      </div>
    );
  }
}

export default MemberList;