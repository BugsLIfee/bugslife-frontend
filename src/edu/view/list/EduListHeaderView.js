import React, { Component } from 'react'
import { Input, Dropdown} from "semantic-ui-react"
import "../scss/EduList.scss"

const options = [
    { key: 1, text: '교육명', value: 1 },
    { key: 2, text: '기관명', value: 2 },
    { key: 3, text: '지역명', value: 3 },
  ]
export default class EduListHeaderView extends Component {
    
    render() {
        const {eduLists} = this.props
        
        return (
            <div>
                <img src="../edu/eduHome.png" width="1000px"/>
                <div className="eduListHeader">
                    <h5>전체<div className="fontColor">&nbsp;{eduLists}</div>건</h5>
                    <div className="searchLayout">
                        <Dropdown placeholder='Select' scrolling options={options} className="eduSearchFilter"/>  
                        <Input icon={{ name: "search", circular: true, link: true }} placeholder="Search" className="eduSearchBar"/>
                    </div>
                </div>
            </div>
        )
    }
}
