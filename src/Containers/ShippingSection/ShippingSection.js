import React, { useState } from 'react'
import ShippingComponent from '../../Components/ShippingComponent/ShippingComponent'
import zoom1 from '../../Assets/Images/Carousel/zoom1.jpg'
import "./ShippingSection.css"

const ShippingSection = () => {
    const ship = [
        {
            imgUrl: "https://cdn-icons-png.flaticon.com/128/609/609361.png",
            heading: "FREE SHIPPING WORLDWIDE",
            para: "On order over $150",
        },
        {
            imgUrl: "https://cdn-icons-png.flaticon.com/512/4784/4784554.png",
            heading: "CASH ON DELIVERY",
            para: "100% money back guraantee",
        },
        {
            imgUrl: "https://cdn-icons-png.flaticon.com/128/3656/3656962.png",
            heading: "SPECIAL GIFT CARD",
            para: "Offer special bonuses with gift",
        },
        {
            imgUrl: "https://cdn-icons-png.flaticon.com/128/1304/1304103.png",
            heading: "24/7 CUSTOMER SERVICES",
            para: "Call us 24/7 at 123-456-789",
        }
    ]
    const [Data, setData] = useState(ship);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="background-scroll" >

                <div className="all-products-for-shipping">
                    {Data.map((val, index) => (
                        <ShippingComponent shipProd={val} />
                    ))}
                </div>
            </div>


            <div className="flex-zoom">
                <div className="wid-zoom">


                    <div class="container">
                        <div class="image">
                            <div className='text-over-zoom-div'>
                                <p className='zoom-text'>Fresh & Delicious</p>
                                <p className='header-zoom'>Healthy Food</p>
                                <p>Save 20% and more</p>
                                <button className='shop-now-btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="image2-zoom">
                            <div className='text-over-zoom-div'>
                                <p className='zoom-text'>Fresh & Delicious</p>
                                <p className='header-zoom'>Healthy Food</p>
                                <p>Save 20% and more</p>
                                <button className='shop-now-btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fix-btn-to-top" onClick={goToTop}>
                <img src="https://cdn-icons-png.flaticon.com/128/1498/1498673.png" alt="" width={"40px"} />
            </div>
        </>
    )
}

export default ShippingSection