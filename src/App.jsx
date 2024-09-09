import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Global.scss";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import BillingShipping from "./pages/BillingShipping";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";
import MyProfile from "./pages/MyProfile";
import ResellerProfile from "./pages/ResellerProfile";
import AddressNormal from "./pages/AddressNormal";
import ProductHistory from "./pages/ProductHistory";
import { useDispatch, useSelector } from "react-redux";
import { loadReseller } from "./actions/userActions";

function App() {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(state => state.user);

  useEffect(() =>{
    dispatch(loadReseller());
  },  [dispatch])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<MyProfile />} />
        <Route path="/raccount" element={<ResellerProfile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<BillingShipping />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route path="/orders" element={<ProductHistory />} />
        <Route path="/address" element={<AddressNormal />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
