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
          bool: false
        }
    }

    componentDidMount(){
        const { edu } = this.props.Store
        window.scrollTo(0,0)
        edu.allList()
    }

    syncEdu = () => {
        this.props.Store.edu.syncEduInfo()
    }

    onFilterList = (type, inputValue) => {
        this.props.Store.edu.filterList(type, inputValue)
    }

    setNextPage = (e) => {
        this.setState({
          page: e.target.getAttribute("value"),
        })
    }
    render() {
        
        const eduLists = this.props.Store.edu.eduFilterList
        const {loadingBtn, disableBtn, bool} = this.props.Store.edu
        const {oauth} = this.props.Store
        
        let eduItemOne = eduLists.slice((this.state.page -1) * 10, this.state.page *10)
        let totalPage = Math.floor(eduLists.length / 10)
        
        if (eduLists.length % 10) {
            totalPage += 1
        }
        
        const edu = eduItemOne.map((eduList) => {
            return (
                <div className="eduListItem">
                    <Grid className="eduItemGrid">
                        {/* <Grid.Column width={3} className="eduItemImg">
                            <EduListImageContainer eduImg={eduList.imgUrl}/>
                            <EduListImageContainer/>
                        </Grid.Column> */}
                        <Grid.Column width={12} className="eduItemMain">
                            <EduListMainContainer eduList={eduList} onSelect={this.onSelect}/>
                        </Grid.Column>
                        <Grid.Column width={4} className="eduItemRating">
                            <EduListRatingContainer eduList={eduList} eduId={eduList.id}/>
                        </Grid.Column>
                    </Grid>
                    <div className="eduItemLine"></div>
                </div>
            )
        })
        return (
            <div>
                { bool ? 
                    <Dimmer active>
                        <Loader>불러오는 중...</Loader>
                    </Dimmer>
                    : <div className="eduList">
                    <EduListHeaderView eduLists={eduLists.length} syncEdu={this.syncEdu} 
                        loadingBtn={loadingBtn} disableBtn={disableBtn} oauth={oauth} onFilterList={this.onFilterList}/>
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
                </div>}
            </div>
        )
    }
}
export default EduListContainer