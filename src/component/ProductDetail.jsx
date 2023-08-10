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
              <strong>Price : $ {product?.price}</strong>
            </div>
            <div>
              <button className='buyButton'>구매하기</button>
            </div>
            <div className='product_notice'>
              <p>
                본 제품은 예약구매로 진행되며, 배송 기간이 약 2주에서 최대
                3달까지 소요될 수 있습니다. <br />
                제품 예약 기능 수명 주기가 만료 되면 주문이 취소됩니다. 세부
                안내를 참조 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
