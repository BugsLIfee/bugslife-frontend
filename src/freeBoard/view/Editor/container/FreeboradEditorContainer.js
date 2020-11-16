import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FreeboardEditorView from "../view/FreeboradEditorView"

// @withRouter
@inject('Store')
@observer
class FreeboardEditorContainer extends Component {
    state=({done: false, postId:""})

    render() {
        console.log(this.props.history)
        const { freeboard_cate } = this.props.Store.freeboard;
        const onCreatePost =(post)=>{
            this.props.Store.freeboard.onCreatePost(post)

            this.setState({done:true, postId:post.id})
            console.log(this.state.postId)
            alert("게시글 작성이 완료되었습니다.")

            this.props.history.push({
                pathname: `/freeboard`
            });
            
            window.location.reload();
        }


        return (
            <div>
                <FreeboardEditorView onCreatePost={onCreatePost} category={freeboard_cate}/>
            
            </div>
        

            // <div>{
            //     this.state.done === false ? 
            //     <FreeboardEditorView onCreatePost={onCreatePost} category={freeboard_cate}/>
            //       : <Redirect to={`/freeboard`} />   }
            // </div>
        );
    }
}

export default FreeboardEditorContainer