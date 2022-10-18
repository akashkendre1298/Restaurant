import React from 'react'
import "./ShippingComponent.css"

const ShippingComponent = (props) => {

    return (
        <>
            <div className='main-div-fr-component'>
                <div className="wid-fr-shipp">
                    <div className='div-for-shipping-compo'>

                        <img src={props.shipProd.imgUrl} alt="" className='img-style' />

                    </div>
                    <h5 className='heading-for-shipping'>{props.shipProd.heading}</h5>


                    <div>
                        <div className='text-div-for-shipping-compo'>
                            <p>{props.shipProd.para}</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ShippingComponent