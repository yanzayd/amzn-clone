import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">

            <div className="payment__container">
                 <h1>
                      Checkout (
                          <Link to="/checkout">{basket?.length} items</Link>
                        )
                 </h1>
                {/* Payment section - delivery */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                  

                            />
                        ))}
                    </div>


                </div>

                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Payment
