import React, { useEffect } from "react";


const text = (content)=>{
    console.log()
    return(
        {_html:content}
    )
}


function FreeboardPostContent(content){
    console.log(content)
    let txt = content
    // let txt = {_html:content}
    console.log(txt)
    return ( 
        <div dangerouslySetInnerHTML={text(content)} />
    )
}




export default FreeboardPostContent;