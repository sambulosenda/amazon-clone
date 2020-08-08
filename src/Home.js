import React from 'react'
import "./Home.css"
import Product from './Product'
import Footer from './Footer'
import Notification from './components/notifications/Notification'

function Home() {
    return (
        <div className="home">
            
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
 <Notification />
            <div className="home_row">
               
                <Product
                    id={1223231}
                    title="Victure AC700 4K 30fps Action Camera PC Webcam with External Microphone Remote Control EIS 40M Underwater Recording Camera "
                    price={67.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6168h6agAAL._AC_SX522_.jpg"
                />

                <Product
                    id={1223231}
                    title=" PlayStation 4 Slim 1TB Console "
                    price={350.30}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71xSJoog7OL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id={1223231}
                    title=" Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR  "
                    price={11.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
                />

                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />

<Product
                    id={1223231}
                    title=" Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food Scale, Black  "
                    price={100.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71lbJjoQHuL._AC_SL1500_.jpg"
                />-
            </div>

            <div className="home_row">
                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                />

              
            </div>

           

        </div>


    )
}

export default Home
