import React from "react";
import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";
import "./Collections.css";

export default function Collections() {
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
