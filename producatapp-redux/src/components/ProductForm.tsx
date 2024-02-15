import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

export default function ProductForm() {
  let [title, setTitle] = useState<string>("");
  let [price, setPrice] = useState<number>(0);
  // description, image, ...
  function submit() {
    let product = {
      title,
      price
    }
    axios.post("http://localhost:1234/products", product).then(response => {
      console.log("Product added!!")
    });
  }
  return (
   <Container>
    <form>
      Title <input type='text' onChange={(evt) => setTitle(evt.target.value)}/> <br />
      Price <input type='number' onChange={(evt) => setPrice(+evt.target.value)}/> <br />
      <button type="button" onClick={() => submit()}>Add Product</button>
    </form>
   </Container>
  )
}
