import React from 'react';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/XCM_Manual_1186807_Prime_deals_Page_GW_1500x250_Prime_XCM_Manual_1186807_1500x200_Eng_1566899294_jpg.jpg"
                alt=""
                className="checkout_ad" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping backet is empty</h2>
                    <p>You have no items on your basket. Add items to the busket</p>
                </div>
            ) : (
                    <div>
                        <h2>Your shopping basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image = {item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default Checkout
