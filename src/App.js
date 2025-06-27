import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인페이지, 상품상세페이지
// 1-1. Navigation Bar 만들기
// 2. 전체상품페이지에서는 상품목록
// 3. 로그인버튼 클릭 시 로그인페이지 이동
// 4. 상품디테일 이동 시 로그인안된경우 로그인페이지로
//    로그인이되어있는경우 상품디테일
// 5. 로그아웃 버튼 클릭 시 로그아웃
//    로그아웃 시 로그인 페이지 이동
// 6. 로그인 시 로그아웃버튼, 로그아웃 시 로그인버튼 노출
// 7. 상품목록 검색

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => console.log("aaa auth : ", auth), [auth]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
