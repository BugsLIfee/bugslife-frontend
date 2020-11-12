import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'
import EduListHeaderView from '../../view/list/EduListHeaderView'
import "../../view/scss/EduList.scss"
import EduListImageContainer from './EduListImageContainer'
import EduListMainContainer from './EduListMainContainer'
import EduListRatingContainer from './EduListRatingContainer'

@inject("Store")
@observer
class EduListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          page: 1,
        }
    }

    onSelect = (Id) => {
        this.props.Store.edu.setEduId(Id)
        
    }
    

      setNextPage = (e) => {
        this.setState({
          page: e.target.getAttribute("value"),
        })
      }
    render() {
        
        const eduLists = this.props.Store.edu.getEduList
        
        let eduItemOne = eduLists.slice((this.state.page -1) * 5, this.state.page *5)
        let totalPage = Math.floor(eduLists.length / 5)
        
        if (eduLists.length % 5) {
            totalPage += 1
          }

        const edu = eduItemOne.map((eduList) => {
            return (
                <div className="eduListItem">
                    <Grid className="eduItemGrid">
                        <Grid.Column width={3} className="eduItemImg">
                            <EduListImageContainer eduImg={eduList.imgUrl}/>
                        </Grid.Column>
                        <Grid.Column width={10} className="eduItemMain">
                            <EduListMainContainer eduList={eduList} onSelect={this.onSelect}/>
                        </Grid.Column>
                        <Grid.Column width={3} className="eduItemRating">
                            <EduListRatingContainer eduList={eduList} eduId={eduList.eId}/>
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
               <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={2}
                    onPageChange={this.setNextPage}
                    totalPages={totalPage}
                />
            </div>
        )
    }
}
export default EduListContainer