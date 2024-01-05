import React from 'react'
import Card from 'react-bootstrap/Card';

import Product from '../model/Product'

type AppProps = {
    product: Product
}
export default function ProductCard({ product }: AppProps) {
    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {product.price}
                </Card.Footer>
            </Card>
        </div>
    )
}
