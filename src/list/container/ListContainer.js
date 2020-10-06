import React, { Component } from "react";
import ListHeaderContainer from "./ListHeaderContainer";
import ListTagContainer from "./ListTagContainer";
import ListViewContainer from "./ListViewContainer";
import { Grid } from "semantic-ui-react";

class ListContainer extends Component {
  render() {
    return (
      <Grid>
      
          <Grid.Column width={3} style={{ border: "solid 1px black" }}>
            <ListTagContainer />
          </Grid.Column>
     
    
          <Grid.Column width={13} style={{border: "solid 1px black" }}>
            <ListHeaderContainer />
            <ListViewContainer />
          </Grid.Column>
          
        
      </Grid>
    );
  }
}

export default ListContainer;
