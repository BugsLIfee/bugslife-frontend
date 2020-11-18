import _ from 'lodash'
import { Search  } from 'semantic-ui-react'
import "./scss/MemberSearch.scss"
import React, { Component } from "react";
import "./scss/MemberSearch.scss"

class MemberSearch extends Component  {

    state=({isLoading : false, value : "", results :[]})
   
    componentWillMount() {
        this.resetComponent()
    }

    source(){
        let {userList} = this.props;
        return userList.map(val=>{
            return {
                title: val.email,
                name : val.name,
                id : val.id
            }
        })
    }

    goToDetailsPageDiv(e, result) {
        // let {userList} = this.props;
        // let original = userList.filter(val=> {return val.email === result.title})
        this.props.onSearchMemeber(result.title);
    }

    resetComponent = () => {
        this.props.onReset();
        this.setState({ isLoading: false, results: [], value: '' })
    }

    handleResultSelect = (e, { result }) => this.goToDetailsPageDiv(e, result);

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) {
                return this.resetComponent() }

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')


            // const isMatch = (result) => re.test(result.title);

            this.setState({
                isLoading: false,
                results:this.source().slice(0).filter(val=> {
                    return re.test(val.title)})
            })
        }, 300)
    }


    render() {
        const { isLoading, value, results } = this.state
        return (
            <Search
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                loading={isLoading}
                results={results}
                value={value}
                input={{placeholder: "회원 검색"}}
                noResultsMessage={"Nothing found"}
                {...this.props}
            />
        )
    }
}

export default MemberSearch;