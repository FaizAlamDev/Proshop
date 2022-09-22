import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FilterBar({ products, mp, fp, setMP, setFP }) {
  // products.map((item) => console.log(item));

  const getMaleProducts = () => {
    axios
      .get("/api/products/cat/mensPerfume")
      .then((res) => {
        setMP(res.data);
        setFP([]);
      })
      .catch((err) => console.log(err));
  };
  const getFemaleProducts = () => {
    axios
      .get("/api/products/cat/womensPefume")
      .then((res) => {
        setFP(res.data);
        setMP([]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ButtonGroup className="mb-2 mt-3">
        <Button onClick={getMaleProducts}>Male</Button>
        <Button onClick={getFemaleProducts}>Female</Button>
      </ButtonGroup>
    </>
  );
}

export default FilterBar;
