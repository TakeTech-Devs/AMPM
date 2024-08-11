// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
import ImageInfo from './components/common/ImageInfo/ImageInfo';
import Products from './pages/Products';
import ProductDetails from './pages/ProductList';
import ProductDetailsCheck from './pages/ProductDetails';
function BasicExample() {
  return (
    <>
      <Header />
      {/* <ImageInfo /> */}
      
      <Products />
      {/* <ProductDetails /> */}
      {/* <ProductDetailsCheck /> */}

       <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<ImageInfo /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
      <Footer />
    </>
  );
}

export default BasicExample;