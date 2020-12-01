import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FreeboardModifyClassViews from '../view/FreeboardModifyClassView';

@inject('Store')
@observer
class FreeboardModifyContainer extends Component {

    componentDidMount=()=>{
        let match = this.props.match;
        this.props.Store.freeboard.freeboardPostSelect(`${match.params.post_id}`);
    }

    onUpdate=async(newPost)=>{  
        const post = this.props.Store.freeboard.freeboard_detail
        newPost["id"] = post.id

        if(newPost.title === undefined){
            newPost.title = post.title
        }

         if(newPost.content === undefined){
            newPost.content = post.content
        }
        
        if(newPost.cate === undefined){
            let today =  new Date();
            let Y =today.getFullYear()
            let M = today.getMonth();
            let D = today.getDate();
       

            newPost.cate = post.cate
            newPost.updateDate =  `${Y}-${M}-${D}` 
        }

        console.log("⏳ update on Container : ", newPost)
        await this.props.Store.freeboard.freeboardModifyPost(newPost);



       await this.props.history.push({
            pathname: `/freeboard/detail/${newPost.id}`
        })
        
        await window.location.reload();

    }

    render() {
        const { freeboard_cate } = this.props.Store.freeboard;
        const { freeboard_detail } = this.props.Store.freeboard

        let freeboardPost = {...freeboard_detail}

        console.log("freeboard_detail" , freeboard_detail)



        return (
            <div>
                 <FreeboardModifyClassViews  post={freeboardPost} category={freeboard_cate} onUpdate={this.onUpdate}/>              
            </div>
        
        );
    }
}

export default FreeboardModifyContainer