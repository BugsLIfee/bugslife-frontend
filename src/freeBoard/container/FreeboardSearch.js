import React, { Component } from 'react'
import _ from 'lodash'
import { Search  } from 'semantic-ui-react'

export default class Freeboardsearch extends Component {

    state=({isLoading : false, value : "", results :[]})
   
    componentWillMount() {
        this.resetComponent()
    }

    source(){
        let {list} = this.props;
        return list.map(val=>{
            return {
                title: val.title,
                name : val.title,
                id : val.id
            }
        })
    }

    goToDetailsPageDiv(e, result) {
    this.props.onSearchPost(result.title);
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
                input={{placeholder: "게시글 검색"}}
                noResultsMessage={" 검색 결과가 없습니다. "}
                {...this.props}
            />
        )
    }
}
