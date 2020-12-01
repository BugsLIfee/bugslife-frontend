import React, { Component } from 'react'
import OtherUserView from '../view/OtherUserView'
import { inject, observer } from 'mobx-react'

@inject('Store')
@observer
class OtherUserContainer extends Component {

    componentDidMount=async()=>{
        let match = this.props.match;
        await this.props.Store.otherUser.getOtherUser(`${match.params.uid}`)
        await this.props.Store.otherUser._recently_top5();
    
    }
    
    render() {
        const user = this.props.Store.otherUser.user
        const questions = this.props.Store.otherUser._questions
        const answers = this.props.Store.otherUser._answers;
        const top5 = this.props.Store.otherUser.recentTop5;
        const {attendDate} = this.props.Store.otherUser
        const {likes} = this.props.Store.otherUser

        return (
            <OtherUserView 
                user = {user}
                questions = {questions}
                answers = {answers}
                top5 = {top5}
                attendDate = {attendDate}
                likes = {likes}
            />
        )
    }
}

export default OtherUserContainer