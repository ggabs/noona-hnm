import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [qry, setQry] = useSearchParams();

  const getProducts = async () => {
    let searchQry = qry.get("q") || "";
    console.log("searchQry : ", searchQry);

    let url = `https://my-json-server.typicode.com/ggabs/noona-hnm/products?q=${searchQry}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [qry]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index) => {
            return (
              <Col key={item.id} lg={3}>
                <ProductCard item={item} index={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
