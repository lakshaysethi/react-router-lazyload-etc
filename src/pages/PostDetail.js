import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'


function PostDetail() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const {title,body} =  state

    return (
        <div>
            <h1>Post title {title}</h1>
            <div style={{border:'4px solid black'}}>{body}</div>
            <button onClick={()=>navigate(-1)}> back to previous page  </button>
        </div>
  )
}

export default PostDetail