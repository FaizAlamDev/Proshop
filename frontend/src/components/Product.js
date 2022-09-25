import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded border-dark">
      <Link to={`/product/${product._id}`}>
        {/* change this to */}
        <Card.Img
          src={product.image}
          className="rounded-top"
          variant="top"
        />
      </Link>

      <Card.Body className="pb-0">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="#000"
          />
        </Card.Text>

        <Card.Text as="h3">&#8377;{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
