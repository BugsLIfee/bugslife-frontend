import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image } from "semantic-ui-react";
import "../../view/scss/EduDetail.scss"

export class EduDetailInfoView extends Component {
    render() {
        const {eduDetail} = this.props
        return (

               <Grid className="eduInfoTable">
                    <Grid.Column width={3} className="eduInfoImg">
                        <Image src={eduDetail.imgUrl} />
                    </Grid.Column>

                    <Grid.Column width={13} className="eduInfoColumn">
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육과정명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduDetail.eTitle}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육기간
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduDetail.startDate} ~ {eduDetail.endDate}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            기관명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduDetail.aTitle}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            주소
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            {eduDetail.addrDetail}
                            </Grid.Column>
                        </Grid.Row>
                        
                           
                                
                        <Grid.Column className="eduInfoRow">
                        <div className="eduCellTitle">전화번호</div >
                        <div className="eduCellSBody">{eduDetail.telephone}</div>
                        <div className="eduCellTitle">홈페이지</div>
                        <div className="eduCellSBody"><a href={`http://${eduDetail.homepage}`} target="_blank">{eduDetail.homepage}</a></div>
                        </Grid.Column>
                            
                        
                    </Grid.Column>
                </Grid> 
                
        )
    }
}

export default EduDetailInfoView
