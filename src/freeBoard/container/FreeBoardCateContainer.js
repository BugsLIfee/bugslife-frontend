import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
import "../view/List/scss/FreeBoardCate.scss"

@inject("Store")
@observer
class FreeboardcateContainer extends Component {

    constructor(props){
        super(props);
        this.state=({ cate_list : [] })
    }


    onSelectCategory=(category)=>{

        let changed_list = this.state.cate_list.slice(0);
        if(changed_list.includes(category)){
            changed_list = changed_list.filter((val)=> val!=category);
        }else{
            changed_list.push(category)
        }

        this.setState({cate_list : changed_list})
        console.log(this.state.cate_list)
        this.props.Store.freeboard.setCategorySelect(changed_list)
    }

    
    render() {
        const cate = this.props.freeboard_cate;
        const {selected_cate} = this.props.Store.freeboard;
        

        return (
            <div className="freeboard_cate_container">
                <div className="freeboard_cate_title"><h5>카테고리</h5></div>
                <div className="freeboard_cate_list"> 
                {cate.map((category)=>{
                return <Checkbox onClick={()=>this.onSelectCategory(category)} label={{ children: category }} />
                })}
                </div>
                
          
            </div>
        )
    }
}

export default FreeboardcateContainer
