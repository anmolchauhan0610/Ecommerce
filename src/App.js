
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ProductData/Login';
import "./App.css";
import SignUp from './ProductData/SignUp';
import ProductListing from './ProductData/ProductListing';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/products' element={<ProductListing />}></Route>
       </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;























