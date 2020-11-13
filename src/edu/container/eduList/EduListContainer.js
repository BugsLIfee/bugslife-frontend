import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Grid, Pagination, Dimmer, Loader } from 'semantic-ui-react'
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

    syncEdu = () => {
        this.props.Store.edu.syncEduInfo()
    }

    componentDidMount(){
        const { edu } = this.props.Store
        edu.allList()
    }
    

    setNextPage = (e) => {
        this.setState({
          page: e.target.getAttribute("value"),
        })
    }
    render() {
        
        const eduLists = this.props.Store.edu.getEduList
        const {active,inline} = this.props.Store.edu
        
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
                            {/* <EduListImageContainer eduImg={eduList.imgUrl}/> */}
                            <EduListImageContainer/>
                        </Grid.Column>
                        <Grid.Column width={10} className="eduItemMain">
                            <EduListMainContainer eduList={eduList} onSelect={this.onSelect}/>
                        </Grid.Column>
                        <Grid.Column width={3} className="eduItemRating">
                            <EduListRatingContainer eduList={eduList} eduId={eduList.id}/>
                        </Grid.Column>
                    </Grid>
                    <div className="eduItemLine"></div>
                </div>
            )
        })
        return (
            <div className="eduList">
                <EduListHeaderView eduLists={eduLists.length} syncEdu={this.syncEdu} active={active} inline={inline}/>
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