import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import Freeboardsubcommview from '../view/detail/FreeboardSubCommView';


@observer
@inject("Store")
class Freeboardsubcommcontainer extends Component {

    onDeleteSubComment=(commentId, subcommId, pwd)=>{
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
                           <Freeboardsubcommview onDeleteSubComment={this.onDeleteSubComment} subcomment = {comm} />
                       )})
                   }
            </div>
        )
    }
}

export default Freeboardsubcommcontainer
