import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
    return (
        <>
            <div className="flex-newsletter">
                <div className="wid-news">
                    <div className="content-news-letter">
                        <div className="headar-subscribe">Subscribe Newsletter</div>
                        <p className='news-desc'>Get e-mail updates about our latest shop and special offers..</p>
                        <div className="input">
                            <input type="email" className='input-newz' placeholder='Your Email Address' />
                        </div>
                        <div>
                            <button className='sub-btn' >Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsLetter