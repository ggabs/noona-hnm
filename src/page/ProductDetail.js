import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [prdInfo, setPrdInfo] = useState(null);
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ggabs/noona-hnm/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("data : ", data);
    setPrdInfo(data);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="">
            <img src={prdInfo?.img} />
          </Col>
          <Col>
            <div>{prdInfo?.title}</div>
            <div>{prdInfo?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
