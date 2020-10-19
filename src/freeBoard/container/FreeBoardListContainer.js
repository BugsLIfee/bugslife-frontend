import React, { Component } from 'react'
import Freeboardlistview from '../view/FreeBoardListView'
import { inject, observer } from "mobx-react"

@inject("Store")
@observer
class Freeboardlistcontainer extends Component {

    render() {
        const {freeboard_list}= this.props.Store.freeboard
        // console.log(freeboard_list)
        // console.log(this.props.Store.freeboard.testData)
    return(
            <div className="freeboard_container_wrap"> 
                <div className="free_borad_title"><h1>자유게시판</h1></div>
                <Freeboardlistview freeboard_list={freeboard_list} />
            </div>
        
    )}
}

export default Freeboardlistcontainer ;