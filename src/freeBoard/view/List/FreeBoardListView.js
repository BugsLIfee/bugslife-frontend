import React, { Component } from 'react'
import Freeboardpost from './FreeBoardPost';
import "./scss/FreeBoardListView.scss"
import {  Pagination ,Button } from "semantic-ui-react"


export default class Freeboardlistview extends Component {
    state=({page: 1})

    setNextPage = (e) => {
      this.setState({...this.state ,page:e.target.getAttribute("value")})
    }  

    render() {
        const freeboard_list = this.props.freeboard_list;
        let totalPage = Math.floor(freeboard_list.length / 10)

        let freeboardList_paging = freeboard_list.slice((this.state.page-1) *10, this.state.page*10)
        return (
        <div>
            {freeboardList_paging.map((post)=>{
            return <Freeboardpost post={post}/>
                })}
        <div className="free_list_pagination">

        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            onPageChange={this.setNextPage}
            totalPages={totalPage}
        />

        <Button secondary as="a" href="/posting_fr">글쓰기</Button>

        </div>

        </div>)
    }
}
