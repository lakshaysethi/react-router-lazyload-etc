import React from 'react'
import {useParams } from 'react-router-dom';

function Products() {
       let {id} = useParams()
  return (
    <div>Products
        <h2> product number - {id} </h2> 
    </div>
  )
}

export default Products