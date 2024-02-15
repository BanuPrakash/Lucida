import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';

export default function ProductList() {
 let value = useContext(ProductContext); // consumer
  return (
    <Container>
        <div className='row'>
        {
            value?.products.map(product => <ProductCard 
                product={product}
                key={product.id}/>)
        }
         </div>
    </Container>
  )
}
