import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const DisplayArea = styled.div`
  padding-top: 32px;
  width: 60vw;
  margin: auto;
`;

const ProductsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

export default function Board() {
  //Just insert random products
  let products = [];

  for (let i = 0; i < 12; i++) {
    products.push([]);
  }

  return (
    <DisplayArea>
      <ProductsArea>
        {products.map(function (item, index) {
          console.log("test");
          return (
            <div key={index}>
              <ProductCard />
            </div>
          );
        })}
      </ProductsArea>
    </DisplayArea>
  );
}
