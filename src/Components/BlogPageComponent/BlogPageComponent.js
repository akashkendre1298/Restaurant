import React from 'react'
import "./BlogPageComponent.css"

const BlogPageComponent = (props) => {
    return (
        <>
            <div className="flex-fr-component">

                <div className="img-div">
                    <img src={props.bgcomp.img} alt="" width={"100%"} />
                </div>

                <div className="desc-div">

                    <h2 className='heading-in-bcomponent'>{props.bgcomp.heading}

                    </h2>

                    <p className='para-in-blog-section-componet'>{props.bgcomp.para}</p>
                    <div className="btn-in-bcomponent">

                        <button className='readmore-btn'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPageComponent