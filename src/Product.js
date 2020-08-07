import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {

    const[ {}, dispatch] = useStateValue();

    const addToBasket = () => {
        //access the store
        //Add item to basket...
        dispatch( {
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <p>{title}</p>
            <p className="product_price"> 
            <small>£</small>
            <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p> &#11088;</p>
                    ))

                    
                }
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to bucket</button>
            
        </div>
    )
}

export default Product
