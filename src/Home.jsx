import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image "
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />

                <div className="home__row">

                    {/* PRODUCT 1 1 */}
                    <Product 
                    id = '12345678'
                    title = 'The lean startup: How Constant
                    Innovstion Creates Radicates Radically Successful
                    Businesses Paperback'
                    price = {11.96}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating = {5}
                    />

                    {/* PRODUCT 1 2 */}
                    <Product 
                    id = '23456781'
                    title = "Kenwood kMix stand Mixer for Baking, Stylish Kitchen
                    Mixer with K-beater, Dough Hook and Whisk 5 Litre Glass Bowl"
                    price = {239.0}
                    rating = {4}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIVUvg1TU5SLMK5PJm7aPHy57YypFGEeAj3DfFR4ciwKag_zsqwdpSbrAepdr8hvmD4w&usqp=CAU"
                    />
                </div>

                <div className="home__row">

                    {/* PRODUCT 2 1 */}
                    <Product 
                    id = '34567812'
                    title = "Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price = {199.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating = {5}
                    />

                    {/* PRODUCT 2 2 */}
                    <Product 
                    id = '45678123'
                    title = 'Amazon Echo (3rd generation) | Smart speacker with Alexa, charcoal Fabric'
                    price = {98.99}
                    image = "http://mobileimages.lowes.com/productimages/8481d3d8-ced8-4aab-a5e1-d05dce3f9375/12025269.jpg"
                    rating = {5}
                    />

                    {/* PRODUCT 2 3 */}
                    <Product 
                    id = '56781234'
                    title = 'New Apple ipad Pro (12.9-inch, Wi-fi,128GB) - Silver (4th Generation'
                    price = {598.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating = {4}
                    />
                </div>

                <div className="home__row">
                   
                    {/* PRODUCT 3 */}
                    <Product 
                    id = '67812345'
                    title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
                    price = {1094.98}
                    image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating = {4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
