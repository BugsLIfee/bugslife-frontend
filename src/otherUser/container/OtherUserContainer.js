import React, { Component } from 'react'
import OtherUserView from '../view/OtherUserView'
import { inject, observer } from 'mobx-react'

@inject('Store')
@observer
class OtherUserContainer extends Component {

    
    render() {
        const user = this.props.Store.otherUser._user
        const questions = this.props.Store.otherUser._questions
        const answers = this.props.Store.otherUser._answers;
        const top5 = this.props.Store.otherUser._recently_top5;

        return (
            <OtherUserView 
                user = {user}
                questions = {questions}
                answers = {answers}
                top5 = {top5}
            />
        )
    }
}

export default OtherUserContainer