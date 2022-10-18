import React from 'react'
import "./BlogComponent.css"
import search from "../../Assets/Images/search.png"
import share from "../../Assets/Images/chain.png"
import lessthan from "../../Assets/Images/less than.png"
import greaterthan from "../../Assets/Images/greater than.png"

const BlogComponent = (props) => {
    return (
        <>



            <div className="prdouct-div">

                <span className="img1-fr-blog">
                    <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-default/consectetur-adipiscing.jpg" alt="" className='img-size' />
                    {/* <img src={props.blog.imgUrl} alt="" className='img-size' /> */}
                </span>
                <span className="img2-fr-prod">
                    {/* <img src="https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg" alt="" className='img-size' /> */}
                    {/* <img src={props.productDel.imgUrl2} alt="" className='img-size' /> */}


                </span>
                <div className="eye">
                    {/* <div className='date-of-blog'>
                        19 december 2021
                    </div> */}

                    <div>
                        <img src={search} alt="" className='hover-icons' />
                    </div>
                    <div>
                        <img src={share} alt="" className='hover-icons' />
                    </div>
                </div>
                <div>
                    <div>Consectetur Adipiscing</div>
                    {/* <div>{props.blog.blogdesc}</div> */}
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    {/* <div>{props.blog.blogdesc}</div> */}
                    <div>
                        <button className='readmore-btn'>Read more</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BlogComponent