import React, { Component } from 'react'
import "./scss/FreeBoardPost.scss"
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Freeboardpost extends Component {

    constructor(props){
        super(props);
        this.state = {
            cate_icon : "" }
        
    }

    componentDidMount(){
        const cate = this.props.post.cate;


        if(cate === "연애"){
            this.setState({cate_icon: "heart"});
        }else if(cate === "회사"){
            this.setState({cate_icon: "building outline"});
        }else if(cate ==="학업"){
            this.setState({cate_icon: "book"});
        }
        else if(cate ==="유머"){
            this.setState({cate_icon: "smile outline"});
        }
        else if(cate ==="자유"){
            this.setState({cate_icon: "bomb"});
        }
        else if(cate ==="취업"){
            this.setState({cate_icon: "student"});
        }
        else {
            this.setState({cate_icon: "soccer"});
        };
    }


    render() {
        const post = this.props.post;

    
        return (
           <div className="post_container">
               <h4 className="post_id">{post.id}</h4>
               <h4 className="post_cate">
 
                   {post.cate}
                   <Icon className ="cate_icon" name= {this.state.cate_icon} /> </h4>
                    <Link to={`/freeboard/detail/${post.id}`}><h4 className="post_title_txt" >{post.title} </h4> <p className="postComment"> [{post.commentLen}]</p>
                {/* <span className="post_comment">[{comment.length}]</span>  */}
                </Link>
  
                    <p className="post_date">
                        {post.registerDate}
                    </p>
                    <p className="post_view">
                        {post.viewCnt}
                    </p>
           </div>
        )
    }
}
