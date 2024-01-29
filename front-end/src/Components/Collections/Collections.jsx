import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Collections.css";
import axios from 'axios'

export default function Collections() {
  const [new_collections, setNewCollection] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/newcollection')
    .then((response)=>{
      console.log(response)
      setNewCollection(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[])
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map(function (item, i) {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}
