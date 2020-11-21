import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'
import "../scss/EduDetail.scss"

export class EduDetailInfoView extends Component {

    render() {
        const {eduInfo} = this.props
        return (
               <Grid className="eduInfoTable">
                    <Grid.Column width={3} className="eduInfoImg">
                        <Image src="https://via.placeholder.com/190x90.png" alt="eduimg"/>
                        <div className="eduRate">
                            <p>교육과정 총평</p> 
                            <div><span className="eduRateVallue">{isNaN(eduInfo.eduRate) ? 0 : parseInt(eduInfo.eduRate*4)/2}</span>
                            &nbsp;&nbsp; / &nbsp;
                            <span className="eduRateMax">10</span></div>
                        </div>
                        {/* {eduInfo.eduRate} */}
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
                                <Link to={`/edu/academy/${eduInfo.academyId}`}>{eduInfo.academyTitle}</Link>
                                &nbsp;({eduInfo.simpleAddr})
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid> 
        )
    }
}

export default EduDetailInfoView
