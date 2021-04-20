import React from 'react'
import './Checkout.css'
import Header from './Header'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{ basket }] = useStateValue()
    return (
        <>
        <Header />
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items click "Add to basket" 
                        next to the item
                    </p>
                </div>
            ) : (
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>

                    {/* List out all the items in cart */}
                    {basket.map((item) => (
                        <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating ={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
        </div>
        </>
    )
}

export default Checkout
