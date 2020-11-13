import React, {Component} from 'react';
import "../scss/likes_bt.scss";

export default class AnswerLikesView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes : this.props.answer.likes,
            clicked_like : this.props.answer.clicked_like,
        }
    }

    render() {
        const { answer, onAnswerLike } = this.props;
        const { likes } = this.state;
        const { clicked_like } = this.state;
        
        return (
            <div className="detail_likes_button">
                <div onClick={() => { 
                    if(!clicked_like) {
                        this.setState({likes : likes+1});
                        this.setState({clicked_like : !clicked_like});
                    }
                }}>
                    <div className="up" onClick={() => {onAnswerLike(answer.id, "up")}} > <i class="fas fa-sort-up"></i> </div>
                </div>
                <div className="likes">
                    {likes}
                </div>
                <div onClick={() => { 
                    if(clicked_like) {
                        this.setState({likes : likes-1});
                        this.setState({clicked_like : !clicked_like});
                    }
                }}>
                    <div className="down" onClick={() => {onAnswerLike(answer.id, "down")}}> <i class="fas fa-sort-down"></i> </div>
                </div>
            </div>
        );
    }
}
