import React, { useState } from 'react'
import "./BlogPage.css"
import search from "../../Assets/Images/search.png"
import BlogPageComponent from './../../Components/BlogPageComponent/BlogPageComponent';
import RestoNavbar from '../../Components/Navbar/RestoNavbar';
import Footer from '../../Components/Footer/Footer';


const BlogPage = () => {


    const allblogs = [
        {
            img: "https://www.mahardhi.com/prestashop/MT03/restora/blog/5-single-default/consectetur-adipiscing.jpg",
            heading: "Consectetur Adipiscing",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
        },

        {
            img: "https://www.mahardhi.com/prestashop/MT03/restora/blog/5-single-default/consectetur-adipiscing.jpg",
            heading: "Consectetur Adipiscing",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
        },
        {
            img: "https://www.mahardhi.com/prestashop/MT03/restora/blog/5-single-default/consectetur-adipiscing.jpg",
            heading: "Consectetur Adipiscing",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
        },
    ]

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>

            <RestoNavbar />

            <div className='burger-nav-header'>
                <div className="burger-heading">
                    <p> Burger</p>
                    <div className="burger-nav-arrow">
                         Home >> <span> All Blogs</span>
                    </div>
                </div>


            </div>

            <div className="flex-blogpage">
                <div className="wid-fr-blogpage">
                    <div className='all-content-bg-page'>
                        <div className="side-content">
                            <div className="burger-types">
                                <div className="head-burger">
                                    Blog Search
                                </div>
                                <div className="burger-filter">
                                    <div className="filterb">
                                        {/* div for search bar  */}
                                        <div className="search-bar-restoblog">
                                            <div className="section-of-oinaidlnkwovio">
                                                <img
                                                    src={search}
                                                    alt=""
                                                    className="search-icon-style"
                                                />
                                                <input
                                                    type="search"
                                                    placeholder="Search..."
                                                    className="input-for-search"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            {/* filter  */}

                            <div className="filter-section">
                                <div className="burger-types">
                                    <div className="head-burger">
                                        Blog Archive
                                    </div>
                                    <div className="burger-filter">
                                        <p className='categories'>2020 December</p>


                                    </div>


                                </div>
                            </div>


                            <div className="filter-section">
                                <div className="burger-types">
                                    <div className="head-burger">
                                        Popular Articles
                                    </div>
                                    <div className="burger-filter">


                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className=" ">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className="">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>


                            <div className="filter-section">
                                <div className="burger-types">
                                    <div className="head-burger">
                                        Recent Articles
                                    </div>
                                    <div className="burger-filter">


                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className=" ">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className="">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>


                            <div className="filter-section">
                                <div className="burger-types">
                                    <div className="head-burger">
                                        Latest Comments
                                    </div>
                                    <div className="burger-filter">


                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className=" ">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                        <div className="flex-fr-side-blog-mini">
                                            <div className="blog-img">
                                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/blog/5-home-small/consectetur-adipiscing.jpg" alt="" width={"40px"} />
                                            </div>

                                            <div className="">
                                                Consectetur Adipiscing Dec 19, 2020
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>


                        {/* right side content  */}


                        <div>
                            {allblogs.map((val, index) => (
                                <BlogPageComponent bgcomp={val} />
                            ))}
                        </div>

                    </div>







                </div>
            </div>


            <Footer />


        </>
    )
}

export default BlogPage