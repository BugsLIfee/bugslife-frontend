import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
import "../view/List/scss/FreeBoardCate.scss"
import selected_post from '../store/FreeboardTestData'

@inject("Store")
@observer
class FreeboardcateContainer extends Component {

    // onSelectCate=(category)=>{
    //     const {selected_cate} = this.props.Store.freeboard;
    //      console.log(selected_cate);
    //     this.setState({ selected_cate : [...selected_cate, category] });
    // }


    render() {
        const cate = this.props.freeboard_cate;
        const {selected_cate} = this.props.Store.freeboard;
        
        // console.log(selected_cate);

        return (
            <div className="freeboard_cate_container">
                
                <div className="freeboard_cate_title"><h5>카테고리</h5></div>
                {cate.map((category)=>{
                return <Checkbox onClick={()=>this.props.Store.freeboard.onSelectCate(category)} label={{ children: category }} />
                })}
            </div>
        )
    }
}

export default FreeboardcateContainer
