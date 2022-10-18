import React, { useState, useEffect } from 'react'
import "./SpecialProduct.css"
import lessthan from "../../Assets/Images/less than.png"
import greaterthan from "../../Assets/Images/greater than.png"
import Product from '../../Components/Product/Product'


const SpecialProduct = () => {

    const specialProducts = [
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/25-home_default/hummingbird-printed-t-shirt.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/39-home_default/the-best-is-yet-to-come-framed-poster.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/85-home_default/brown-bear-cushion.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/86-home_default/brown-bear-cushion.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/73-home_default/mug-today-is-a-good-day.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/72-home_default/mug-today-is-a-good-day.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        }, {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/38-home_default/the-best-is-yet-to-come-framed-poster.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/39-home_default/the-best-is-yet-to-come-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/133-home_default/brown-bear-notebook.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/78-home_default/mountain-fox-cushion.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/79-home_default/mountain-fox-cushion.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
    ]


    const [Data, setData] = useState(specialProducts);

    return (
        <>
            <div className="special-product">
                <div className="flex-productpage">
                    <div className="wid-productpage">
                        <div className="productpage-nav-heading">Special Products</div>
                        <div className="productpage-nav-content">

                            <div className='arrow-div'>
                                <img src={lessthan} alt="" className='arrow' />
                                <img src={greaterthan} alt="" className='arrow' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* special product section  */}


            <div className="all-products-for-resto">
                <div className="wid-fr-all-prod">


                    {Data.map((val, index) => (
                        <Product productDel={val} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default SpecialProduct