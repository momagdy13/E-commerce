import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../Components/ProductDetails/ProductDetail";
export default function Products() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id == Number(productId));
  return(<div>
    
    <Breadcrum product={product} />
    <ProductDetail product={product} />
  </div>);
  
}
