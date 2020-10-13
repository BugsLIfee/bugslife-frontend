import React, { Component } from 'react'
import {inject, observer} from "mobx-react"
import { observable } from 'mobx';


@inject("Store")
@observer
class Testcontainer extends Component {

    render() {
        const {user} = this.props.Store;
        user.selectAll();
        user.selectUser(1);
        // console.log(user.getUser);
        return (
            <div>
        
                {user.getUsers}            
            <h1>{user.getUser}</h1>
</div>
        )
    }
}

export default Testcontainer