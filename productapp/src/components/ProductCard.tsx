import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';

import Product from '../model/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

type AppProps = {
    product: Product
}
export default function ProductCard({ product }: AppProps) {
    let { addToCart } = useContext(CartContext)
    let { id, title, price, description, image } = product;
    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {price}
                    &nbsp;
                    <FontAwesomeIcon color='red' icon={faHeart} />
                    <FontAwesomeIcon
                        color='blue'
                        icon={faShoppingCart}
                        onClick={() => addToCart({
                            id,
                            title,
                            price,
                            image,
                            amount: price,
                            quantity: 1
                        })} />
                </Card.Footer>
            </Card>
        </div>
    )
}
