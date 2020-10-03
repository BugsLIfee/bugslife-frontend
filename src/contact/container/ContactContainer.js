import React, { Component } from 'react';
import ContactSideMenu from "../view/ContactSideMenu";
import ContactResultContainer from "./ContactResultContainer";
import { Grid } from "semantic-ui-react";
class ContactContainer extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={5}>
                    <ContactSideMenu />
                </Grid.Column>
                <Grid.Column width={11}>
                    <ContactResultContainer />
                </Grid.Column>
            </Grid>
        );
    }
}

export default ContactContainer;