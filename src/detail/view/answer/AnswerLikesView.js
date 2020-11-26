import React, {Component} from 'react';
import swal from "sweetalert";
import "../scss/likes_bt.scss";

export default class AnswerLikesView extends Component {

    render() {
        const { answer, onAnswerLike, login } = this.props;
        const { likes } = answer;
        const { clicked_like } = answer;
        
        return (
            <div className="detail_likes_button">
                <div onClick={() => { 
                    if(login){
                        if(!clicked_like) {
                            this.setState({likes : likes+1});
                            this.setState({clicked_like : !clicked_like});
                        }
                    } else {
                        swal("로그인이 필요합니다!");
                    }
                }}>
                    <div className="up" onClick={() => {onAnswerLike(answer.id, "up")}} > <i className="fas fa-sort-up"></i> </div>
                </div>
                <div className="likes">
                    {likes}
                </div>
                <div onClick={() => { 
                    if(login) {
                        if(clicked_like) {
                            this.setState({likes : likes-1});
                            this.setState({clicked_like : !clicked_like});
                        }
                    } else {
                        swal("로그인이 필요합니다!")
                    }
                }}>
                    <div className="down" onClick={() => {onAnswerLike(answer.id, "down")}}> <i className="fas fa-sort-down"></i> </div>
                </div>
            </div>
        );
    }
}
