import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer-flex">
                <div className="footer-wid">
                    <div className="fooer-content">
                        <div className="first-section-footer">
                            <div className="head-footer">
                                Restaurant
                            </div>
                            <div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, labore natus? Blanditiis totam velit nihil id? Laboriosam, iure ex odit eos dolorem cum, laudantium tenetur esse dolore voluptates, dolor dignissimos.
                                </p>
                            </div>

                            <div className="social-media">
                                <div className="icons">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt="" />
                                </div>
                                <div className="icons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="" />
                                </div><div className="icons">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1377/1377213.png" alt="" />
                                </div><div className="icons">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="second-section">
                            <div className="info">
                                <h2>INFORMATION</h2>
                                <div className='underline-div'></div>
                                <div>
                                    <li className='items-in-footer'>Delivery</li>
                                    <li className='items-in-footer'>About Us</li>
                                    <li className='items-in-footer'>Price Dops</li>
                                    <li className='items-in-footer'>New Products</li>
                                    <li className='items-in-footer'>Best Sales</li>
                                </div>
                            </div>
                            <div className="myaccount">
                                <h2>MY ACCOUNT</h2>
                                <div className='underline-div'></div>
                                <div>
                                    <li className='items-in-footer'>Personal Info</li>
                                    <li className='items-in-footer'>Order</li>
                                    <li className='items-in-footer'>Credit Slip</li>
                                    <li className='items-in-footer'>Address</li>
                                    <li className='items-in-footer'>My wishlist</li>
                                </div>
                            </div>
                            <div className="contact"><h2>CONTAT INFO</h2>
                                <div className='underline-div'></div>
                                <div>
                                    <li className='items-in-footer'>Address: 71 Pennington Lane Vernon Rockville, CT 06066.</li>
                                    <li className='items-in-footer'>Phone: 0123-456-789</li>
                                    <li className='items-in-footer'>E-mail: Theme@Demo.Com</li>

                                </div></div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer