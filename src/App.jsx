import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
