import React, { Component } from 'react'
import EduAddReviewView from '../../view/detail/EduAddReviewView';
import EduInsertReviewView from '../../view/detail/EduInsertReviewView';
import "../../view/scss/EduDetail.scss"

export class EduAddReviewContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            insertForm : false,
        }
    }
    render() {
        const onInsertForm = () => {
            this.setState({insertForm : !insertForm});
        }
        const { insertForm } = this.state;
        const {onAddReview,oauth} = this.props;
        
        return (
            <div className="addReview">
                {insertForm ? <EduInsertReviewView onAddReview={onAddReview} onInsertForm={onInsertForm} /> : <EduAddReviewView onInsertForm={onInsertForm} oauth={oauth} />}
            </div>
        );
    }
}

export default EduAddReviewContainer
