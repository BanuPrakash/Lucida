import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../model/Product';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

export default function Details() {
  let [product, setProduct] = useState<Product | null>(null);
  let { id } = useParams(); // for PathParameter
  // useSearchParams(); for QueryParameter

  // componentDidUpdate
  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`).then(response => {
      setProduct(response.data);
    })
  }, [id]);

  return (
    <Container>
      {
        product && <div>
          <img src={product.image} /> <br />
          Description : {product.description} <br />
        </div>
      }
    </Container>
  )
}
