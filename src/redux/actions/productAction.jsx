import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/Parkseolmin/Frock__shop/products?q=${searchQuery}`; // API 엔드포인트 URL
    // let url = `http://localhost:5000/products?q=${searchQuery}`; // API 엔드포인트 URL
    let response = await fetch(url); // URL에 대한 GET 요청을 보내고 응답을 받습니다.
    let data = await response.json(); // 응답 데이터를 JSON 형식으로 변환합니다.
    // dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/Parkseolmin/Frock__shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: { data } });
    dispatch(productActions.getSingleProduct({ data }));
  };
}
export const productAction = { getProducts, getProductDetail };
