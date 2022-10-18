import React from 'react'
import RestoNavbar from './../../Components/Navbar/RestoNavbar';
import Product from './../../Components/Product/Product';
import Footer from './../../Components/Footer/Footer';

const BreadPage = () => {
    const burgers = [
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        },
        {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
            title: "Whiskey King Burger",
            price: "$26",
        }, {
            imgUrl1: "https://www.mahardhi.com/prestashop/MT03/restora/59-home_default/mug-the-best-is-yet-to-come.jpg",
            imgUrl2: "https://www.mahardhi.com/prestashop/MT03/restora/53-home_default/today-is-a-good-day-framed-poster.jpg",
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
    return (

        <>
            <RestoNavbar />
            <div className='burger-nav-header'>
                <div className="burger-heading">
                    <p> Burger</p>
                    <div className="burger-nav-arrow">
                         Home >> Bread
                    </div>
                </div>


            </div>
            <div className="flex-burger">
                <div className="wid-burger">
                    <div className="content-burger-page">
                        <div className="side-content">
                            <div className="burger-types">
                                <div className="head-burger">
                                    Bread
                                </div>
                                <div className="burger-filter">
                                    <div className="filterb">
                                        <p>Burger Bun</p>
                                        {/* <p>
                                            <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="" width={"20px"} />
                                        </p> */}
                                    </div>
                                    <div className="filterb">
                                        <p>Garlic Bread</p>
                                        {/* <p>
                                            <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="" width={"20px"} />
                                        </p> */}
                                    </div>
                                    <div className="filterb">
                                        <p>Pizza Crust</p>
                                        <p>
                                            {/* <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="" width={"20px"} /> */}
                                        </p>
                                    </div>
                                    <div className="filterb">
                                        <p>Brown Bread</p>
                                        <p>
                                            {/* <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="" width={"20px"} /> */}
                                        </p>
                                    </div>
                                    <div className="filterb">
                                        <p>Sandwich Bread</p>
                                        <p>
                                            {/* <img src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="" width={"20px"} /> */}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* filter  */}

                            <div className="filter-section">
                                <div className="burger-types">
                                    <div className="head-burger">
                                        Filter By
                                    </div>
                                    <div className="burger-filter">
                                        <p className='categories'>Categories</p>

                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>Hamburger</p>

                                        </div>
                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>Chlili Chicken</p>

                                        </div>
                                    </div>

                                    <div className="burger-filter">
                                        <p className='categories'>Size</p>

                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>S</p>

                                        </div>
                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>M</p>


                                        </div>
                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>L</p>

                                        </div>
                                        <div className="filterb-check">
                                            <p>
                                                <input type="checkbox" /></p>
                                            <p>XL</p>

                                        </div>
                                        <div className="burger-filter">
                                            <p className='categories'>Color</p>

                                            <div className="filterb-check round">
                                                <p>
                                                    <input type="checkbox" /></p>

                                                <p>White</p>

                                            </div>
                                            <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>Black</p>

                                            </div>
                                        </div>
                                        <div className="burger-filter">
                                            <p className='categories'>Composition</p>

                                            <div className="filterb-check round">
                                                <p>
                                                    <input type="checkbox" /></p>

                                                <p> Ceramic</p>

                                            </div>
                                            <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>
                                                    Cotton</p>

                                            </div>
                                            <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>
                                                    Matt paper </p>

                                            </div>  <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>
                                                    Polyester </p>

                                            </div>  <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>
                                                    Recycled cardboard </p>

                                            </div>
                                        </div>
                                        <div className="burger-filter">
                                            <p className='categories'>Property</p>

                                            <div className="filterb-check round">
                                                <p>
                                                    <input type="checkbox" /></p>

                                                <p> 120 pages </p>

                                            </div>
                                            <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>Long sleeves </p>

                                            </div>    <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>
                                                    Removable cover</p>

                                            </div>    <div className="filterb-check">
                                                <p>
                                                    <input type="checkbox" /></p>
                                                <p>Short sleeves</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* rightside content  */}
                        <div className='right-content'>
                            <div className='right-content-img'>
                                <img src="https://www.mahardhi.com/prestashop/MT03/restora/c/3-category_default/burger.jpg" alt="" width={"100%"} />
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ratione consequuntur similique porro laboriosam .</p>
                            </div>

                            <div className="refine-search">
                                <p>Refine Search </p>
                                <div className="btn-div-refine-search">
                                    <button className='btn-search'>Burger Bun</button>
                                    <button className='btn-search'>Garlic Bread</button>
                                    <button className='btn-search'>Pizza Crust</button>
                                    <button className='btn-search'>Brown Bread</button>
                                    <button className='btn-search'>Sandwich Bread</button>
                                </div>
                            </div>
                            {/* sortby section  */}
                            <div className="sort-section">
                                <div className='sort-left-side'>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/128/2499/2499116.png" alt="s" width={"30px"} />
                                    </div>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/1834/1834117.png" alt="a" width={"30px"} />
                                    </div>
                                    <div>There are 14 products</div>
                                </div>
                                <div >
                                    <label for="cars">Sort By:</label>
                                    &nbsp; &nbsp; &nbsp;
                                    <select className='select-option'>
                                        <option value="Relevance">Relevance</option>
                                        <option value="
          Name, A to Z
        ">
                                            Name, A to Z
                                        </option>
                                        <option value="
          Name, Z to A
        ">
                                            Name, Z to A
                                        </option>
                                        <option value="
          Price, low to high
        ">
                                            Price, low to high
                                        </option>
                                        <option value="
          Price,  high to low 
        "> Price, high to low  </option>
                                    </select>

                                </div>

                            </div>


                            {/* products  */}


                            <div className="all-products-for-resto">
                                <div className="wid-fr-all-prod">


                                    {burgers.map((val, index) => (
                                        <Product productDel={val} />
                                    ))}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default BreadPage