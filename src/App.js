import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import ProductAll from './component/ProductAll';
import ProductDetail from './component/ProductDetail';
import PrivateRoute from './route/PrivateRoute';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from './component/Footer';

// 1. 전체 상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 로그인 페이지가 나온다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // useEffect(() => {
  //   console.log('authenticate', authenticate);
  // }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route
          path='/login'
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path='/product/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
