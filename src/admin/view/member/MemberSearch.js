import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Search,  Label } from 'semantic-ui-react'
import "./scss/MemberSearch.scss"

const source =()=>{
    // let {userList} =this.props.Store.oauth;
    userList.map(val=> {return {
        title: val.email,
        id: val.id,
        name : val.name
    }});
}
 
  const initialState = {
    loading: false,
    results: [],
    value: '',
  }
  
  function exampleReducer(state, action) {

    // console.log("action", action)
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query }
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results }
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection }
  
      default:
        throw new Error()
    }
  }

const resultRenderer = ({ email }) => <Label content={email} />

const MemberSearch=()=>{
    const [state, dispatch] = React.useReducer(exampleReducer, initialState)
    const { loading, results, value } = state

    const timeoutRef = React.useRef()
  
    const handleSearchChange = React.useCallback((e, data) => {

        clearTimeout(timeoutRef.current)
      dispatch({ type: 'START_SEARCH', query: data.value })
      
      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: 'CLEAN_QUERY' })
          return
        }
  
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        const isMatch = (result) => re.test(result.title)


        dispatch({
          type: 'FINISH_SEARCH',
          results: _.filter(source,isMatch)
        })
      }, 300)
    }, [])

    React.useEffect(() => {
      return () => {
        clearTimeout(timeoutRef.current)
      }
    }, [])
  
    return (
      <div className="member_search_container">
          <Search
            loading={loading}
            onResultSelect={(e, data) =>
              dispatch({ type: 'UPDATE_SELECTION', selection: data.result })
            }
            onSearchChange={handleSearchChange}
            resultRenderer={resultRenderer}
            results={results}
            value={value}
          />
      </div>
    )
}

export default MemberSearch