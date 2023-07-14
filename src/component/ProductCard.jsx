import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className='product__item' onClick={showDetail}>
      <div className='product__imgContainer'>
        <img className='product__img' src={item?.img} alt='제품' />
      </div>
      <div>{item?.choice === true ? 'Conscious choice' : ''}</div>
      <div className='product__name'>{item?.title}</div>
      <div>${item?.price}</div>
      <div className='product__new'>{item?.new === true ? 'New' : ''}</div>
    </div>
  );
}
