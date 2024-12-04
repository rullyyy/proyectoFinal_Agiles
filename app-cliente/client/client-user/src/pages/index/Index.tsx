import React from "react";
import Header from "../../components/header/Header.tsx";
import "./index.css";
import Banner from "../../components/banner/Banner.tsx";
import ProductCard from "../../components/product-card/ProductCard.tsx";

export default function Index() {
  return (
    <html>
      <head></head>

      <body>
        <header>
          <div className="container-fluid header-container">
            <div className="row col-12">
              <Header />
            </div>
          </div>
        </header>

        <main>
          <div className="container-fluid">
            <div className="row col-12">
              <Banner />
            </div>
          </div>

          <div className="container-fluid products-heading">
            <div className="row col-12">
              <h4>Explora nuestros productos</h4>
            </div>
          </div>
          <div className="container-fluid products-container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <ProductCard img="/img/termo.jpg" />
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <ProductCard img="/img/termo.jpg" />
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <ProductCard img="/img/termo.jpg" />    
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
