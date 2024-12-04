import React from "react";
import "./productCard.css";
interface ProductCardProps {
  img: string;
}

export default function ProductCard({ img }: ProductCardProps) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} className="card-img-top" alt="..." />
      </div>

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
