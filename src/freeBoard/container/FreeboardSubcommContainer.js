import React, { Component } from 'react'
import Freeboardsubcommview from '../view/detail/FreeboardSubCommView';

export default class Freeboardsubcommcontainer extends Component {


    render() {
        let {comment} =this.props;
        let subComm = comment.subComments;
        console.log(subComm)
        return (
            <div>
                   {
                       subComm.map(comm=>{ 
                           return(
                           <Freeboardsubcommview subcomment = {comm} />
                       )})
                   }
            </div>
        )
    }
}
