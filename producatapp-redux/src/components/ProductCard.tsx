import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';

import Product from '../model/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { addToCart } from '../redux/features/CartSlice';

type AppProps = {
    product: Product
}
export default function ProductCard({ product }: AppProps) {
    const dispatch = useAppDispatch();
    let { id, title, price, description, image } = product;
    return (
        <div className='col-sm-6 col-md-4 my-2'>
            <Card style={{ width: '18rem' }}>
                <Link to={`/details/${id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
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
                        onClick={() => dispatch(addToCart({
                            id,
                            title,
                            price,
                            image,
                            quantity: 1,
                            amount: price
                        }))}
                    />
                </Card.Footer>
            </Card>
        </div>
    )
}
