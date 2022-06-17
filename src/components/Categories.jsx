import React from "react";
import styled from "styled-components"

const Container = styled.div`
    margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`







const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <Container >
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </Container>
  );
};

export default Categories;