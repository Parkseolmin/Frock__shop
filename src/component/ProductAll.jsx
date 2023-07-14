import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll() {
  // productList와 setProductList 상태 변수를 선언하고 초기값으로 빈 배열을 할당합니다.
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값', searchQuery);
    let url = `https://my-json-server.typicode.com/Parkseolmin/Frock__shop/products?q=${searchQuery}`; // API 엔드포인트 URL
    // let url = `http://localhost:5000/products?q=${searchQuery}`; // API 엔드포인트 URL
    let response = await fetch(url); // URL에 대한 GET 요청을 보내고 응답을 받습니다.
    let data = await response.json(); // 응답 데이터를 JSON 형식으로 변환합니다.
    setProductList(data); // productList 상태 변수를 응답 데이터로 업데이트합니다.
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='ProductAll'>
      <SliderComponent />
      <div style={{ margin: '30px' }}></div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col sm={12} md={6} lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
