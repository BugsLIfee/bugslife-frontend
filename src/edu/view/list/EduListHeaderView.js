import React, { Component } from 'react'
import { Input, Form, Dropdown, Button, Icon} from "semantic-ui-react"
import "../scss/EduList.scss"

const options = [
    { key: 1, text: '교육명', value: 1 },
    { key: 2, text: '기관명', value: 2 },
    { key: 3, text: '지역명', value: 3 },
  ]

export default class EduListHeaderView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type : 1,
            inputValue : "",
        }
    }

    handleChange = (e, data) => {
        this.setState({type: data.value})
    }
    
    render() {
        const {eduLists, syncEdu, loadingBtn, disableBtn, oauth, onFilterList } = this.props
        
        return (
            <div>
                <img src="../edu/eduHome.png" width="1000px" alt="img"/>
                <div className="eduListHeader">
                    <h5>
                        전체<div className="fontColor">&nbsp;{eduLists}</div>건&nbsp;&nbsp;
                            &nbsp;
                            { oauth.getCurrentUserInfo.role==="ADMIN" ? 
                            <Button content="동기화" loading={loadingBtn} disabled={disableBtn} primary onClick={()=>{syncEdu()}}/>
                            : null
                        }
                    </h5>
                    <div className="searchLayout">
                        <Dropdown placeholder='Select' scrolling options={options} className="eduSearchFilter" onChange={this.handleChange} value={this.state.type}/>  
                        <Form onSubmit={()=>onFilterList(this.state.type, this.state.inputValue)}>
                            <Input icon={<Icon name='search' inverted circular link onClick={()=>{onFilterList(this.state.type, this.state.inputValue)}}/>}
                                placeholder="Search" className="eduSearchBar"  onChange={(e)=>{this.setState({inputValue : e.target.value})}}/>
                        </Form>
                    
                    </div>
                </div>
            </div>
        )
    }
}
