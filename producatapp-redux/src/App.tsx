import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent';
import ProductList from './components/ProductList';
import Default from './components/Default';
import ProductForm from './components/ProductForm';

const CartComponent = lazy(() => import('./components/CartComponent'));
const Details = lazy(() => import('./components/Details'));


function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <CartComponent />
          </Suspense>
        } />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
