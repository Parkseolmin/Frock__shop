import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetail() {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductDetail = async () => {
      dispatch(productAction.getProductDetail(id));
    };
    getProductDetail();
  }, [dispatch, id]);
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
