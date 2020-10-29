import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import "../../view/scss/EduDetail.scss"

export class EduDetailInfoView extends Component {
    render() {
        return (

               <Grid className="eduInfoTable">
                    <Grid.Column width={3} className="eduInfoImg">
                        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                    </Grid.Column>

                    <Grid.Column width={13} className="eduInfoColumn">
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육과정명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            혁신성장
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            교육기간
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            내일
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            기관명
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            멀캠
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="eduInfoRow">
                            <Grid.Column className="eduCellTitle">
                            주소
                            </Grid.Column>
                            <Grid.Column className="eduCellBody">
                            우리집
                            </Grid.Column>
                        </Grid.Row>
                        
                           
                                
                        <Grid.Column className="eduInfoRow">
                        <div className="eduCellTitle">전화번호</div >
                        <div className="eduCellSBody">교육과정명</div>
                        <div className="eduCellTitle">홈페이지</div>
                        <div className="eduCellSBody">교육과정명</div>
                        </Grid.Column>
                            
                        
                    </Grid.Column>
                </Grid> 
                
        )
    }
}

export default EduDetailInfoView
