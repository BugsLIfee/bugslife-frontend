import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FreeboardEditorView from "../view/FreeboradEditorView"
import swal from 'sweetalert';



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
            swal("글쓰기 성공 ","자유게시판 글쓰기가 완료되었습니다.","success");

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