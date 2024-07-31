import { useState } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import ProductListingPage from './component/ProductListingPage';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import CartSummary from './component/CartSummary';
import ShippingInfo from './component/ShippingInfo';
import PaymentInfo from './component/PaymentInfo';
import OrderConfirmation from './component/OrderConfirmation';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import ThankuPage from './component/ThankuPage';
import AdminDashboard from './component/AdminDashboard';
import OrderHistory from './component/OrderHistory';
function App() {


  return (
    <div className="text-4xl text-center text-red-400">
    
   
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/checkout/cart-summary" element={<CartSummary/>} />
        <Route path="/checkout/shipping" element={<ShippingInfo/>} />
        <Route path="/checkout/payment" element={<PaymentInfo/>} />
        <Route path="/checkout/confirmation" element={<OrderConfirmation/>} />
        <Route path="/checkout/thankupage" element={<ThankuPage/>} />
        <Route path="/admin/products" element={<AdminDashboard />} />
        <Route path="/order-history" element={<OrderHistory />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>,
    </div>
  )
}

export default App
