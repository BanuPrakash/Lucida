import React from 'react'
import CartItem from '../model/CartItem'
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../redux/store';
import { increment } from '../redux/features/CartSlice';
type PropsType = {
  product: CartItem
}
export default function CartList(props: PropsType) {
  let dispatch = useAppDispatch();
  let { id, title, image, price, amount, quantity } = props.product;
  return (
    <div className='row'>

      <div className='col-md-2'>
        <img src={image} style={{ "width": '50px' }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button> - </Button>
        Quantity: {quantity}
        <Button onClick={() => dispatch(increment(id))}> + </Button>
      </div>
      <div className='col-md-2'>
        Price : {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
