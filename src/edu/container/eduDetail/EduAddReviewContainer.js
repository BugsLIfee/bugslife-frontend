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
        
        return (
            <div className="addReview">
                {insertForm ? <EduInsertReviewView onInsertForm={onInsertForm} /> : <EduAddReviewView onInsertForm={onInsertForm} />}
            </div>
        );
    }
}

export default EduAddReviewContainer
