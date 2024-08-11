// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
function BasicExample() {
  return (
    <>
      <Header />
       <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
      <Footer />
    </>
  );
}

export default BasicExample;