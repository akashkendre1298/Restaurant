import React from 'react'

import RestoNavbar from './../../Components/Navbar/RestoNavbar';
import Slider from './../../Components/Carousel/Slider';
import ShippingSection from '../ShippingSection/ShippingSection';
import ProductPage from '../ProductPage/ProductPage';
import Testomonial from '../Testomonial/Testomonial';
import SpecialProduct from '../SpecialProduct/SpecialProduct';
import NewsLetter from '../NewsLetter/NewsLetter';
import Partners from '../Partners/Partners';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <>


            <RestoNavbar />
            <Slider />
            <ShippingSection />
            <ProductPage />
            <Testomonial />
            <SpecialProduct />
            <NewsLetter />
            <Partners />
            <Footer />

        </>
    )
}

export default Home