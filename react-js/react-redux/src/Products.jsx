import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "./redux/products.slice";

function Products() {
  let dispatch = useDispatch();
  let { list, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductList(1));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong ! try again</p>;
  return <div>Products are {list.length}</div>;
}

export default Products;
