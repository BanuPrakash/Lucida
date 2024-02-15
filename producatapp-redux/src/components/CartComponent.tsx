import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { clearCart } from '../redux/features/CartSlice';

export default function CartComponent() {
  let { cartItems: products, total } = useAppSelector(state => state.cart)
  let dispatch = useAppDispatch();
  return (
    <Container>
      {
        products.map(product => <CartList key={product.id} product={product} />)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          Total: {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button onClick={() => dispatch(clearCart())}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
