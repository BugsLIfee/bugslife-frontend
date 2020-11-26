import React, { Component } from 'react'
import { Grid, Image } from "semantic-ui-react";
import "../scss/AcademyDetail.scss"
export class AcademyDetailInfoView extends Component {
    render() {
        const {academyInfo} = this.props
        let homepage = academyInfo.homePage
        if(!String(homepage).includes("http")){
            homepage = "http://"+homepage
        } 
        console.log(homepage)
        return (
               <Grid className="academyInfoTable">
                    <Grid.Column width={3} className="academyInfoImg">
                        <Image src="https://via.placeholder.com/190x90.png" alt="academyimg"/>
                        <div className="academyRate">
                            <p>학원 총평</p> 
                            <div><span className="academyRateVallue">{isNaN(academyInfo.academyRate) ? 0 : parseInt(academyInfo.academyRate*4)/2}</span>
                            &nbsp;&nbsp; / &nbsp;
                            <span className="academyRateMax">10</span></div>
                        </div>
                        {/* {eduInfo.eduRate} */}
                    </Grid.Column>

                    <Grid.Column width={13} className="academyInfoColumn">
                        {/* <Grid.Row className="eduInfoRow">
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
                        </Grid.Row> */}
                        <Grid.Row className="academyInfoRow">
                            <Grid.Column className="academyCellTitle">
                            학원명
                            </Grid.Column>
                            <Grid.Column className="academyCellBody">
                                {academyInfo.title}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="academyInfoRow">
                            <Grid.Column className="academyCellTitle">
                            주소
                            </Grid.Column>
                            <Grid.Column className="academyCellBody">
                            {academyInfo.address}
                            </Grid.Column>
                        </Grid.Row>        
                        <Grid.Column className="academyInfoRow">
                        <div className="academyCellTitle">전화번호</div >
                        <div className="academyCellSBody">{academyInfo.telephone}</div>
                        <div className="academyCellTitle">홈페이지</div>
                        <div className="academyCellSBody"><a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></div>
                        </Grid.Column>
                    </Grid.Column>
                </Grid> 
        )
    }
}

export default AcademyDetailInfoView
