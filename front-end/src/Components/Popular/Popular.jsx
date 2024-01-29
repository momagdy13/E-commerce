import React, { useEffect, useState } from 'react'
import './Popular.css'
import Items from '../Items/Items';
import axios from 'axios'

export default function Popular() {
  const [data_product, setDataProduct] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/popularinwomen')
    .then((response)=>{
      console.log(response)
      setDataProduct(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[])
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Items key = {i} id = {item.id} name = {item.name} image = {item
                .image}  new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}
