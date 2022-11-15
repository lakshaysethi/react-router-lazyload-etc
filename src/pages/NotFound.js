import React from 'react'
import {useNavigate} from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate();
  return (
    <div>
        Sorry this page does not exist
        {/* <Navigate to="/" /> */}
        <button onClick={()=>navigate('/')}> back to home </button>
        <button onClick={()=>navigate(-1)}> back to previous page  </button>

    </div>
  )
}

export default NotFound