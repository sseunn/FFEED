import React, { useEffect } from "react";
import "./Category.css";

import styled from "styled-components";

const categories = [
  {
    name: "all",
    value: "전체보기",
  },
  {
    name: "funiture",
    value: "가구",
  },
];

const CategoriesZone = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  background-color: black;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesZone>
      {categories.map((e) => (
        <Category
          key={e.name}
          active={category === e.name}
          onClick={() => onSelect(e.name)}
        >
          {e.value}
        </Category>
      ))}
    </CategoriesZone>
  );
};
export default Categories;
