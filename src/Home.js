import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            <div className="home_row">
                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />

                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
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
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />

                <Product
                    id={1223231}
                    title="The hard thing about hard things "
                    price={11.60}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51slqM2g3jL._AC_UL320_SR212,320_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
