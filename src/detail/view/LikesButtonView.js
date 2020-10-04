import React, {Component} from 'react';
import "./scss/likes_bt.scss";

export default class LikesButtonView extends Component {
    render() {

        const {likes} = this.props;
        
        return (
            <div className="detail_likes_button">
                {/* <div className="button"> */}
                <div className="up"> <i class="fas fa-sort-up"></i> </div>
                {/* </div> */}
                <div className="likes">
                    {likes}
                </div>
                <div className="down"> <i class="fas fa-sort-down"></i> </div>
            </div>
        );
    }
}
