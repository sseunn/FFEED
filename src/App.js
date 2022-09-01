import { useState, useEffect } from "react";
// import styledComponents from "styled-components";
import Category from "./component/Category";
import "./App.css";
import data from "./data";

export default function App() {
  const [category, setCatecory] = useState("all");
  let [funiture] = useState(data);
  console.log(data);

  return (
    <div className="App">
      <div>
        <div>가구</div>
        {/* <Category
          categories={funiture}
          category={category}
          setCatecory={setCatecory}
        /> */}
      </div>

      <div className="Products">
        <div className="card">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{funiture[0].title}</h5>
            <p className="card-text">{funiture[0].content}</p>
            <p>{funiture[0].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
  function TopCategory() {
    if (data.largecategory == "가구") {
      return <div>요호</div>;
    }
  }
}
