import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import GetProducts from "../../Services/GetProducts";

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

  const { data, isLoading, isError } = GetProducts();


  if (isError) return (<div>ERRO</div>)

  if (isLoading) return (<div>LOADING</div>)

  if (data) {
    let products = [];

    for (let i = 0; i < 12; i++) {
      products.push([]);
    }

    return (
      <DisplayArea>
        <ProductsArea>
          {data.map(function (item, index) {
            console.log("test");
            return (
              <div key={index}>
                <ProductCard name={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price} />
              </div>
            );
          })}
        </ProductsArea>
      </DisplayArea>
    );
  }
}
