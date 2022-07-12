import './App.css';
import Home from './components/Home';
import Product from './components/mobile';
import About from "./components/About"
import {Route ,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Laptop } from './components/laptop';
import Ipad from './components/Ipad';
import MobileDisplay from './components/mobileDisplay';
import LapDisplay from './components/lapDisplay';
import IpadDisplay from './components/IpadDisplay';
import Cart from "./components/cart";
import Checkout from './components/Checkout';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import { Payment } from './components/Payment';
import { Paymentdone } from './components/paymentdone';


function App() {
  const [log,setLog] = useState(false);
  useEffect(() => {
    var a = JSON.parse(localStorage.getItem("app")) || null;
    if(a){
      setLog(true)
    }
  })
  return (
    <>
    <Navbar  setLog={setLog} log={log}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
        
      <Route path='/Login' element={<Login setLog={setLog}/>} />
      <Route path='/Signup' element={<Signup/>} />

      <Route path='/Product' element={<Product/>} />
      <Route path='/Product/:id' element={<MobileDisplay/>} />

      <Route path='/Navbar' element={<Navbar/>} />
      <Route path='/laptop' element={<Laptop/>} />
      <Route path='/laptop/:id' element={<LapDisplay/>} />

      <Route path='/Ipad' element={<Ipad/>} />
      <Route path='/Ipad/:id' element={<IpadDisplay/>} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/Payment" element={<Payment/>} />

      <Route path='/paymentdone' element={<Paymentdone></Paymentdone>} />
    </Routes> 
    </>
  );
}

export default App;
