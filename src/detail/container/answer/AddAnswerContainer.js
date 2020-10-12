import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import InsertAnswerView from "../../view/answer/AddAnswerView";
import AddAnswerView from "../../view/answer/InsertAnswerView";
import "../../view/scss/answerList.scss";

class AddAnswerContainer extends Component {
    
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

        const { login } = this.props;
        const { insertForm } = this.state;
        
        return (
            <div className="detail_answer_list">
                {login==="true" && (!insertForm && <InsertAnswerView onInsertForm={onInsertForm} />)}
                {login==="true" && (insertForm && <AddAnswerView onInsertForm={onInsertForm} />)}
            </div>
        );
    }
}

export default AddAnswerContainer;
