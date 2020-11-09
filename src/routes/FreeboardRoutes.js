
import React from 'react';
import { Route } from 'react-router-dom';
import FreeBoardContainer from '../freeBoard/container/FreeBoardContainer';
import Freeboarddetailcontainer from '../freeBoard/container/FreeBoardDetailContainer';
import qs from "qs";

const FreeboardRoutes = ({location, match})=>{
    console.log("match");
    console.log(match);
    console.log("Location ")
    console.log(location)

    // let parsing  = qs.parse(location.search)
    // console.log(parsing)
    return(
        <>
            <Route exact path ={`${match.url}`} component={FreeBoardContainer} />
            {/* <Route exact path ={`${match.url}/datail`} component={Freeboarddetailcontainer} /> */}
            <Route path ={`${match.url}/datail/:post_id`} component={Freeboarddetailcontainer} />
        </>
    )
}

export default FreeboardRoutes;