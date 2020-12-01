import React, { Component } from 'react';
import SignUp from '../view/SignUp';
import { observer, inject } from "mobx-react";
import MainContainer from "../../main/container/MainContainer"

@inject("Store")
@observer
class Singupcontainer extends Component {
    constructor(){
        super();
        this.state ={
            validation : false
        }
    }

    
    onSubmitForm =(userObj, validationCheck)=>{
        const {user} =this.props.Store;
        user.createUser(userObj)

        if(validationCheck==true){
            this.onValidationCheck(validationCheck)
  
        }
    }

    onValidationCheck =()=>{
        this.setState({validation: true})
    }

    render() {

        if(this.state.validation){
            return <MainContainer />
        }
        return (
            <div>
               <SignUp onSubmitForm={this.onSubmitForm}/> 
            </div>
        )
    }
}

export default Singupcontainer;