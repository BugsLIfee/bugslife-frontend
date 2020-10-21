import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
import "../view/scss/FreeBoardCate.scss"

export default class FreeboardcateContainer extends Component {
    render() {
        const cate = this.props.freeboard_cate
        return (
            <div className="freeboard_cate_container">
                
                <div className="freeboard_cate_title"><h5>카테고리</h5></div>
                {cate.map((category)=>{
                return <Checkbox label={{ children: category }} />
                })}
            </div>
        )
    }
}
