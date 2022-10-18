import React from 'react'
import "./Product.css"

const Product = (props) => {
    return (
        <>
            <div className='main-div-product'>
                <div className="prdouct-div">
                    <div className="clrhover"></div>

                    <span className="img1-fr-prod">
                        {/* <img src="https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg" alt="" className='img-size' /> */}
                        <img src={props.productDel.imgUrl1} alt="" className='img-size' />
                    </span>
                    <span className="img2-fr-prod">
                        {/* <img src="https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg" alt="" className='img-size' /> */}
                        <img src={props.productDel.imgUrl2} alt="" className='img-size' />


                    </span>
                    <div className="eye">
                        <img src="https://cdn-icons-png.flaticon.com/128/2874/2874802.png" alt="" className='hover-icons' />
                    </div>

                    <span className='btn-div'>
                        <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="" className='hover-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/128/2326/2326980.png" alt="" className='hover-icons' />
                        <img src="https://cdn-icons-png.flaticon.com/128/2028/2028323.png" alt="" className='hover-icons' />


                    </span>

                </div>


                <div className="text-fr-prod">
                    {/* <p className='title-product'>Whiskey King Burger</p> */}
                    <p className='title-product'>{props.productDel.title}</p>
                    <p></p>
                    {/* <p className='price-product'>$26</p> */}
                    <p className='price-product'>{props.productDel.price}</p>
                </div>
            </div>
        </>
    )
}

export default Product