import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import Freeboarddetailview from '../view/detail/FreeboardDetailView'
import "../view/detail/scss/FreeboardDetailiCon.scss"



@inject("Store")
@observer
class Freeboarddetailcontainer extends Component {
    state=({like:false})

     onLikePost= async(like)=>{
        this.setState({like:like})
        await this.props.Store.freeboard.onLikePost(!like)
    }

    componentDidMount=()=>{
        this.props.Store.freeboard.freeboardPostSelect(2);
    }

    render() {
        const {freeboard_detail} = this.props.Store.freeboard;

     
        console.log("=====freeboard_detail container=======")
        // console.log(JSON.stringify(freeboard_detail))
        return (
            <div className="freeboard_detail_wrap">
                    <div className="free_borad_title"><h1>자유게시판</h1></div>
  
                <div className="freeboard_detail_postcontainer">
                    <Freeboarddetailview detail = {freeboard_detail} like={this.state.like} onLikePost={this.onLikePost} />
                </div>

            </div>
        )
    }
}
export default Freeboarddetailcontainer;