import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    // let url = `https://my-json-server.typicode.com/Parkseolmin/Frock__shop/products/${id}`;
    let url = `http://localhost:5000/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <div className='ProductDetail'>
        <div className='ProductDetail__container'>
          <div>
            <img
              className='ProductDetail__img'
              src={product?.img}
              alt='상품이미지'
            />
          </div>
          <div className='ProductDetail__text'>
            <p>Clothes</p>
            <h2>{product?.title}</h2>
            <div>
              <div className='ProductDetail__size'>
                <p>size</p>
                <div className='size_control'>
                  <p>S</p>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className='ProductDetail__size'>
                <p>color</p>
                <div className='size_control'>
                  <p>black</p>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <strong>$ {product?.price}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
