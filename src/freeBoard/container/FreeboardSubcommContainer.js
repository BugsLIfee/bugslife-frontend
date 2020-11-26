import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import Freeboardsubcommview from '../view/detail/FreeboardSubCommView';



@inject("Store")
@observer
class Freeboardsubcommcontainer extends Component {

    onDeleteSubComment=(commentId, subcommId, pwd)=>{
        console.log(commentId, pwd)
        this.props.Store.freeboard.onDeleteSubComment( commentId, subcommId, pwd);
    }

    render() {
        let {comment} =this.props;
        let subComm = comment.subComments;

        return (
            <div>
                   {
                      subComm.map(comm=>{ 
                           return(
                           <Freeboardsubcommview key={comm.id} onDeleteSubComment={this.onDeleteSubComment} subcomment = {comm} />
                       )})
                   }
            </div>
        )
    }
}

export default Freeboardsubcommcontainer
