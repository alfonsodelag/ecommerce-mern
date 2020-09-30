import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://m.media-amazon.com/images/G/01/DeveloperBlogs/AppstoreBlogs/FireTV/0530-Roseherobanner-static._CB477929436_.png?t=true"
                alt=""
            />

            <div className="home__row">

                <Product
                    id="12321341"
                    title="The Lean Startup Book"
                    price={11.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51oazT5gZ6L._SY344_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12321341"
                    title="Apple iPhone XR, 64GB, White - Fully Unlocked (Renewed)"
                    price={450}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61U15mbXKNL._AC_SX522_.jpg"
                />

            </div>

            <div className="home__row">

                <Product
                    id="12321341"
                    title="Wireless Earbuds,Bluetooth 5.0 Wireless Headphones True Wireless Stereo Earphones with LED Battery Display Charging Case Built-in Mic, True Wireless Earbuds with Earhook for Running,Workouts"
                    price={24.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61FRK6jP3IL._AC_SX425_.jpg"
                />

                <Product
                    id="12321341"
                    title="Apple iPhone XR, 64GB, White - Fully Unlocked (Renewed)"
                    price={450}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61U15mbXKNL._AC_SX522_.jpg"
                />

                <Product
                    id="12321341"
                    title="Creative Pebble 2.0 USB-Powered Desktop Speakers with Far-Field Drivers and Passive Radiators for Pcs and Laptops (Black)"
                    price={21.20}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/31lrbOsJ2qL._AC_SX466_.jpg"
                />

            </div>

            <div className="home__row">

                <Product
                    id="12321341"
                    title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
                    price={1208.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SX450_.jpg"
                />

            </div>
        </div>
    )
}

export default Home
