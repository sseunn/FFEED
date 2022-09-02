import { useState, useEffect, useCallback } from "react";
// import styledComponents from "styled-components";
import Categories from "./component/Categories";
import "./App.css";

export default function App() {
  const [category, setCatecory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/data/data.json"),
      {
        method: "GET",
      }
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.sub_category.subcategories.sub_category_id);
        });
  }, []);
  console.log(product);
  return (
    <div className="App">
      <div>
        {/* <div>가구</div> */}
        <Categories category={category} onSelect={onSelect} />
      </div>

      {/* <div className="Products">
        {product.map((a, i) => {
          return (
            <div className="card">
              <img src="/image/armchair1.jpg" className="card-img" alt="메인" />
              <div className="card-body">
                <h5 className="card-title">{funiture.title}</h5>
                <p className="card-text">{funiture.content}</p>
                <p>{funiture.price}</p>
              </div>
            </div>
          );
        })}
    </div> */}
  );
}
