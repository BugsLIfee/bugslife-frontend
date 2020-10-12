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
        console.log("container on submit form : "+userObj)
        user.createUser(userObj)

        if(validationCheck==true){
            this.onValidationCheck(validationCheck)
  
        }
    }

    onValidationCheck =()=>{
        this.setState({validation: true})
        console.log(this.state.validation)
    }

    render() {
        console.log("this.state.validation : " + this.state.validation)

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