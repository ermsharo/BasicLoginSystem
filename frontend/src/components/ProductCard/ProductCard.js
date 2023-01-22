import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";

const CardStructure = styled.div`
  height: 450px;

  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  h2 {
    padding: 16px;
  }
  h3 {
    text-align: left;
    padding: 16px;
  }
`;

export default function ProductCard({ name, image, price }) {
  return (
    <CardStructure>
      <CardMedia sx={{ height: 220 }} image={image} title={name} />
      <h2>{name}</h2>
      <h3>R${Math.ceil(price, 2)},00</h3>
    </CardStructure>
  );
}
