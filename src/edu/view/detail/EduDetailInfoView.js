import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import "../../view/scss/EduDetail.scss"

export class EduDetailInfoView extends Component {
    render() {
        return (
            <div>
               <Grid className="eduInfoTable">
                    <Grid.Column width={3} className="eduInfoColumn">
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                    </Grid.Column>

                    <Grid.Column width={13} className="eduInfoColumn">
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                            <Grid.Column>
                            교육과정명
                            </Grid.Column>
                        </Grid.Row>
                        
                           
                                
                        <Grid.Column className="eduInfoRow">
                        <div>교육과정명</div>
                        <div>교육과정명</div>
                        <div>교육과정명</div>
                        <div>교육과정명</div>
                        </Grid.Column>
                            
                        
                    </Grid.Column>
                </Grid> 
                hello Info!
            </div>
        )
    }
}

export default EduDetailInfoView
