import React, { Component } from 'react';

class PrivateChatView extends Component {
    render() {
        const obj = this.props.searchObj;
        return (
            
            <div>
                {obj.partnerId}
            </div>
        );
    }
}

export default PrivateChatView;