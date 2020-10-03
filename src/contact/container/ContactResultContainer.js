import React, { Component } from 'react';
import InfoMngContainer from './InfoMngContainer';
import QnaMngContainer from './QnaMngContainer';

class ContactResultContainer extends Component {
    render() {
        const menu  = this.props.menu ;
        return (
            
            <div>
                {menu === "qna" ? <QnaMngContainer /> : ""}
                {menu === "info" ? <InfoMngContainer /> : ""}
            </div>
        );
    }
}

export default ContactResultContainer;