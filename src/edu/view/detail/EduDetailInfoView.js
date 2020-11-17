import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import "../../view/scss/EduDetail.scss"

export class EduDetailInfoView extends Component {
    render() {
        const {eduInfo} = this.props
        return (
               <Grid className="eduInfoTable">
                    <Grid.Column width={3} className="eduInfoImg">
                        <Image src="https://via.placeholder.com/190x90.png" alt="eduimg"/>
                    </Grid.Column>

                    <Grid.Column width={13} className="eduInfoColumn">
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육과정명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduInfo.title}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육기간
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            [{eduInfo.startDate}]&nbsp;&nbsp;~&nbsp;&nbsp;[{eduInfo.endDate}]
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            기관명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduInfo.academyTitle}&nbsp;({eduInfo.simpleAddr})
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid> 
        )
    }
}

export default EduDetailInfoView
