import React, { Component } from 'react'
import "./scss/FreeBoardPost.scss"
import { Icon } from 'semantic-ui-react'


export default class Freeboardpost extends Component {

    constructor(props){
        super(props);
        this.state = {
            cate_icon : "" }
        
    }

    componentDidMount(){
        const cate = this.props.post.cate;
        const icon = this.state.cate_icon
        if(cate == "연애"){
            this.setState({cate_icon: "heart"});
        }else if(cate == "회사"){
            this.setState({cate_icon: "building outline"});
        }else if(cate =="학업"){
            this.setState({cate_icon: "book"});
        }
        else if(cate =="유머"){
            this.setState({cate_icon: "smile outline"});
        }
        else if(cate =="자유"){
            this.setState({cate_icon: "bomb"});
        }
        else if(cate =="취업"){
            this.setState({cate_icon: "student"});
        }
        else {
            this.setState({cate_icon: "soccer"});
        };
    }


    render() {
        const post = this.props.post
        const cate = this.props.post.cate;

        console.log(this.state.cate_icon)
    
        console.log(cate=="자유")
        return (
           <div className="post_container">
            <div className="post_title">

               <h4 className="post_id">{post.post_id}</h4>
               <h4 className="post_cate">
                   {/* <Icon name={
                       cate=="연애" ? "heart": ("회사" ? "building outline" : ("취업"?  "student" : ("유머"? "smile outline" : ("학업" ? "book": ("자유"? "bomb" : "" )))))} /> */}
                   
                   {post.cate}
                   <Icon className ="cate_icon" name= {this.state.cate_icon} /> </h4>
                <a href="/"><h4 className="post_title_txt">{post.title} </h4>
                <span className="post_comment">[{post.comments}]</span> </a>
               </div>
               <div className="post_info">
                    <p className="post_date">
                        {post.date}
                    </p>
                    <p className="post_view">
                        {post.views}
                    </p>
               </div>
               {/* {JSON.stringify(post)} */}
           </div>
        )
    }
}
