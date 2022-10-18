import React, { useState } from "react";
import "./RestoNavbar.css";
import { Link } from "react-router-dom";


const RestoNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="resto-navbar-main-container">
                <div className="resto-navbar-main-container-width">
                    <div className="resto-navbar-main-container-sub-div">
                        <div>
                            <Link to="/">
                                <h3 className="resto-logo-tag">Restaurant</h3>
                            </Link>
                        </div>
                        <div className="resto-navbar-main-container-sub-div-one">
                            <ul className="resto-nav-links">
                                <input type="checkbox" id="checkbox_toggle" />
                                <label for="checkbox_toggle" className="resto-hamburger">
                                    &#9776;
                                </label>
                                <div className="resto-nav-menu">
                                    <div className="resto-nav-part-one">
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <div className="drp-dwn-fr-reso">
                                            <li>
                                                <Link to="/burger">
                                                    Burger
                                                </Link>
                                            </li>

                                            <div class="dropdown-reso-content">
                                                <div className="flex-div-for-drp-dwn fs-fr-p">
                                                    <div style={{ backgroundColor: "white", marginTop: "15px" }}>
                                                        {/* <Link to="/blogs/"> */}
                                                        <div className="deading-in-drp-dwn">
                                                            <h3 >Chili Chicken</h3>
                                                            <hr className="hr-frheding-drp-dwn" />
                                                        </div>
                                                        {/* </Link> */}
                                                        {/* <Link to="/guides/"> */}
                                                        <p>Fruit Bun</p>
                                                        {/* </Link> */}
                                                        {/* <p>Support</p> */}
                                                        {/* <p>What's New</p>
                                                    <p>FAQ</p> */}
                                                        {/* <Link to="/Events/"> */}
                                                        <p>Hot Dog Bun</p>
                                                        {/* </Link> */}
                                                        {/* <Link to="/case-study/"> */}
                                                        <p>Pita Bread</p>
                                                        {/* </Link> */}

                                                    </div>
                                                    <div style={{ backgroundColor: "white", marginTop: "15px" }}>
                                                        <div className="deading-in-drp-dwn">
                                                            <h3 >Hamburger</h3>
                                                            <hr className="hr-frheding-drp-dwn" />
                                                        </div>
                                                        {/* </Link> */}
                                                        {/* <Link to="/guides/"> */}
                                                        <p>Big Burger</p>
                                                        {/* </Link> */}
                                                        {/* <p>Support</p> */}
                                                        {/* <p>What's New</p>
                                                    <p>FAQ</p> */}
                                                        {/* <Link to="/Events/"> */}
                                                        <p>Chargrilled Burger</p>
                                                        {/* </Link> */}
                                                        {/* <Link to="/case-study/"> */}
                                                        <p>Small Burger</p>
                                                        {/* </Link> */}

                                                    </div>
                                                    {/* <div class="dropdown-reso-content"> */}
                                                    <div style={{ backgroundColor: "white", marginTop: "15px" }}>
                                                        <div className="deading-in-drp-dwn">
                                                            <h3 >Steak Sandwich</h3>
                                                            <hr className="hr-frheding-drp-dwn" />
                                                        </div>
                                                        {/* </Link> */}
                                                        {/* <Link to="/guides/"> */}
                                                        <p>Sweet Bread</p>
                                                        {/* </Link> */}
                                                        {/* <p>Support</p> */}
                                                        {/* <p>What's New</p>
                                                    <p>FAQ</p> */}
                                                        {/* <Link to="/Events/"> */}
                                                        <p>Hakka Noodles</p>
                                                        {/* </Link> */}
                                                        {/* <Link to="/case-study/"> */}
                                                        <p>Creamy Sandwich</p>
                                                        {/* </Link> */}

                                                    </div>

                                                </div>
                                                {/* </div> */}
                                            </div>
                                        </div>



                                        <li>
                                            <Link to="/bread">

                                                Bread
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pizza">
                                                Pizza
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/burger">
                                                Lazio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">
                                                Blog
                                            </Link>
                                        </li>
                                    </div>

                                </div>

                            </ul>

                        </div>
                        <div className="resto-sybols-part-div">

                            <img src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="" className="resto-strike-symbol" />


                            <img src="https://cdn-icons-png.flaticon.com/128/2832/2832495.png" alt="" className="resto-cart-symbol" />


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RestoNavbar