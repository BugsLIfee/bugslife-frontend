import React, {Component} from 'react';
import "./scss/likes_bt.scss";

export default class LikesButtonView extends Component {
    render() {

        const { answer, onAnswerLike } = this.props;
        console.log("LIKEBUTTON");
        
        return (
            <div className="detail_likes_button">
                <div className="up" onClick={() => {onAnswerLike(answer.id, "up")}} > <i class="fas fa-sort-up"></i> </div>
                <div className="likes">
                    {answer.likes}
                </div>
                <div className="down" onClick={() => {onAnswerLike(answer.id, "down")}}> <i class="fas fa-sort-down"></i> </div>
            </div>
        );
    }
}
