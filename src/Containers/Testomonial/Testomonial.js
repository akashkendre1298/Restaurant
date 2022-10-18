import React from 'react'
import "./Testomonial.css"
import lessthan from "../../Assets/Images/less than.png"
import greaterthan from "../../Assets/Images/greater than.png"

const Testomonial = () => {
    return (
        <>
            <div className="testomonial">
                <div className="wid-fr-testomonial">
                    <div className='arrow-images'><img src={lessthan} alt="as" className='arrow' /></div>
                    <div className='testomonial-content'>
                        <div className='hedaing-testomonial'>Testomonial</div>
                        <p className='para-in-testomonial'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nesciunt asperiores. Ad, architecto eius? Ab at eveniet soluta nulla obcaecati natus laudantium beatae sint voluptas!</p>
                        <div className='testomonial-img-wrapper'><img src="https://www.mahardhi.com/prestashop/MT03/restora/modules/mt_testimonials/images/sample-3.jpg" alt="" /></div>

                    </div>
                    <div><img src={greaterthan} alt="as" className='arrow' /></div>
                </div>
            </div>
        </>
    )
}

export default Testomonial