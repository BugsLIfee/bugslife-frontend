import React, { Component } from 'react'
import "./scss/FreeboardPostContent.scss"

class FreeboardPostContent extends Component {
 
    
    render() {

        let content =this.props.content;

        const createMarkup = function(){
            return {__html:content}
        }



        return (
            <div className="postContent_container">
                <div dangerouslySetInnerHTML= {createMarkup()} />
            </div>
        )
    }
}




export default FreeboardPostContent;