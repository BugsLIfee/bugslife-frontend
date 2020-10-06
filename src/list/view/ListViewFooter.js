import React, { Component } from "react";

class ListViewFooter extends Component {
  render() {
    const { listView } = this.props;
    
    return (
      <div>
        {/* <div class="item-right"> */}
        <div class="inner">
          <div class="img">
            <img class="img2" src="https://via.placeholder.com/30x30"/>
          </div>
          <span class="point">
            <span class="default">{listView.point}</span>
            <span class="plus">{listView.addPoints * 10}</span>
          </span>
          <span class="comment">
            나도 궁금해요<span class="number">{listView.addPoints}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default ListViewFooter;
