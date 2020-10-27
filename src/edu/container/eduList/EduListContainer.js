import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EduListHeaderView from '../../view/list/EduListHeaderView'
import EduListImageView from '../../view/list/EduListImageView'
import EduListMainView from '../../view/list/EduListMainView'
import EduListRatingView from '../../view/list/EduListRatingView'
import "../../view/scss/EduList.scss"

@inject("Store")
@observer
class EduListContainer extends Component {
    render() {
        const eduLists = this.props.Store.edu.getEduList
        
        const edu = eduLists.map((eduList) => {
            return (
                <div className="eduListItem">
                    <Grid className="eduItemGrid">
                        <Grid.Column width={3} className="eduItemImg">
                            <EduListImageView eduImg={eduList.imgUrl}/>
                        </Grid.Column>
                        <Grid.Column width={10} className="eduItemMain">
                            <EduListMainView eduList={eduList}/>
                        </Grid.Column>
                        <Grid.Column width={3} className="eduItemRating">
                            <EduListRatingView eduList={eduList}/>
                        </Grid.Column>
                    </Grid>
                    <div className="eduItemLine"></div>
                </div>
            )
        })
        return (
            <div className="eduList">
               <EduListHeaderView eduLists={eduLists.length}/>
               {edu}
            </div>
        )
    }
}
export default EduListContainer