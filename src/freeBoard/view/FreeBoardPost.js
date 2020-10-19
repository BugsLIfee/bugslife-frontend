import React, { Component } from 'react'

export default class Freeboardpost extends Component {


    render() {
        const post = this.props.post
        return (
           <div className="post_container">
               {JSON.stringify(post)}
           </div>
        )
    }
}
