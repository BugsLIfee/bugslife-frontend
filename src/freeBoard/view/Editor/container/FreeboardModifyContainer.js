import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FreeboardModifyView from '../view/FreeboardModifyView';

@inject('Store')
@observer
class FreeboardModifyContainer extends Component {
    state=({post: {}})


    componentDidMount=()=>{
        let match = this.props.match;
        this.props.Store.freeboard.freeboardPostSelect(`${match.params.post_id}`);
    }

    onUpdate=(newPost)=>{  
        console.log("⏳ update on Container : ", newPost)
        this.setState({post: newPost})

    }

    render() {
        const { freeboard_cate } = this.props.Store.freeboard;
        const { freeboard_detail } = this.props.Store.freeboard

        // console.log(this.state.post)
        // let detail;
        //  this.state.post !== {} ? (detail = freeboard_detail) : (detail =this.state.post)

        //console.log(detail)
        // console.log("=====freeboard::")
        // console.log(JSON.stringify(freeboard_detail))

        const onModifyPost =(post)=>{
            // this.props.Store.freeboard.onCreatePost(post)

            this.setState({done:true, postId:post.id})
         
            console.log(this.state.postId)
            alert("게시글 수정이 완료되었습니다.")

            this.props.history.push({
                pathname: `/freeboard`
            });
            
            window.location.reload();
        }


        return (
            <div>
                <FreeboardModifyView onModifyPost={onModifyPost} post={freeboard_detail} category={freeboard_cate} onUpdate={this.onUpdate}/>
            
            </div>
        
        );
    }
}

export default FreeboardModifyContainer