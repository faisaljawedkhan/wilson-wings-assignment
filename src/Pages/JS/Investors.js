import React from 'react'
import "../CSS/Investors.css";
import image10 from "../../Assets/Navbar/left-icon.png"
import image12 from "../../Assets/Navbar/investor-image.png"
import { Link } from 'react-router-dom';
import Navbar from '../../Component/JS/Navbar';
import FilterBtn from '../../Component/JS/FilterBtn';
import MainComponent from '../../Component/JS/MainComponent';

const Investors = () => {
    return (
        <>
            <section className="investors-main-page-section-start-here">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Navbar />
                        <div className="col-md-9 main-nav-second-right-div">
                            <div className="second-right-first-div">
                                <h3>Investors</h3>
                                <p>Investors</p>
                            </div>
                            <div className="second-right-second-div">
                                <div className="second-right-second-first-inner-div">
                                    <h3><span className='second-right-second-div-image'><img src={image10} alt="" className='img-fluid' /></span><span className="second-right-second-div-heading ms-3">All Investors</span></h3>
                                    <button><Link to={"/add-investor"}>ADD INVESTOR</Link></button>
                                </div>
                            </div>
                            <FilterBtn />
                            <div className="container-fluid">
                                <div className="row justify-flex-start">
                                    <div className="col-md-6 second-right-investor-card-div">
                                        <div className="second-right-investor-card-first-inner-div">
                                            <div className="second-right-investor-card-first-main-div">
                                                <div className="name-image-email-and-button-div">
                                                    <div className="investor-name-and-image-div">
                                                        <img src={image12} alt="" className='img-fluid' />
                                                        <div className="investor-name-and-email-div ms-2">
                                                            <h4>Rajesh Sinha</h4>
                                                            <p>rajeshsinha@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="investor-button-div">
                                                        <button className='active'>Active</button>
                                                    </div>
                                                </div>
                                                <div className="investment-type-and-deals-div">
                                                    <div className="investment-div">
                                                        <h4>$12M</h4>
                                                        <p>INVESTMENTS</p>
                                                    </div>
                                                    <div className="deals-div">
                                                        <h4>03</h4>
                                                        <p>DEALS</p>
                                                    </div>
                                                    <div className="long-term-div">
                                                        <h4>Long Term</h4>
                                                        <p>TYPE</p>
                                                    </div>
                                                </div>
                                                <div className="investor-card-buton-div">
                                                    <button className='create-log-btn'>CREATE LOG</button>
                                                    <button className='details-btn'><Link to={"/investor-single"}>VIEW DETAILS</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 second-right-investor-card-div">
                                        <div className="second-right-investor-card-first-inner-div">
                                            <div className="second-right-investor-card-first-main-div">
                                                <div className="name-image-email-and-button-div">
                                                    <div className="investor-name-and-image-div">
                                                        <img src={image12} alt="" className='img-fluid' />
                                                        <div className="investor-name-and-email-div ms-2">
                                                            <h4>Rajesh Sinha</h4>
                                                            <p>rajeshsinha@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="investor-button-div">
                                                        <button className='inactive'>Inactive</button>
                                                    </div>
                                                </div>
                                                <div className="investment-type-and-deals-div">
                                                    <div className="investment-div">
                                                        <h4>$12M</h4>
                                                        <p>INVESTMENTS</p>
                                                    </div>
                                                    <div className="deals-div">
                                                        <h4>03</h4>
                                                        <p>DEALS</p>
                                                    </div>
                                                    <div className="long-term-div">
                                                        <h4>Long Term</h4>
                                                        <p>TYPE</p>
                                                    </div>
                                                </div>
                                                <div className="investor-card-buton-div">
                                                    <button className='create-log-btn'>CREATE LOG</button>
                                                    <button className='details-btn'><Link to={"/investor-single"}>VIEW DETAILS</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 second-right-investor-card-div">
                                        <div className="second-right-investor-card-first-inner-div">
                                            <div className="second-right-investor-card-first-main-div">
                                                <div className="name-image-email-and-button-div">
                                                    <div className="investor-name-and-image-div">
                                                        <img src={image12} alt="" className='img-fluid' />
                                                        <div className="investor-name-and-email-div ms-2">
                                                            <h4>Rajesh Sinha</h4>
                                                            <p>rajeshsinha@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="investor-button-div">
                                                        <button className='active'>Active</button>
                                                    </div>
                                                </div>
                                                <div className="investment-type-and-deals-div">
                                                    <div className="investment-div">
                                                        <h4>$12M</h4>
                                                        <p>INVESTMENTS</p>
                                                    </div>
                                                    <div className="deals-div">
                                                        <h4>03</h4>
                                                        <p>DEALS</p>
                                                    </div>
                                                    <div className="long-term-div">
                                                        <h4>Long Term</h4>
                                                        <p>TYPE</p>
                                                    </div>
                                                </div>
                                                <div className="investor-card-buton-div">
                                                    <button className='create-log-btn'>CREATE LOG</button>
                                                    <button className='details-btn'><Link to={"/investor-single"}>VIEW DETAILS</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 second-right-investor-card-div">
                                        <div className="second-right-investor-card-first-inner-div">
                                            <div className="second-right-investor-card-first-main-div">
                                                <div className="name-image-email-and-button-div">
                                                    <div className="investor-name-and-image-div">
                                                        <img src={image12} alt="" className='img-fluid' />
                                                        <div className="investor-name-and-email-div ms-2">
                                                            <h4>Rajesh Sinha</h4>
                                                            <p>rajeshsinha@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="investor-button-div">
                                                        <button className='active'>Active</button>
                                                    </div>
                                                </div>
                                                <div className="investment-type-and-deals-div">
                                                    <div className="investment-div">
                                                        <h4>$12M</h4>
                                                        <p>INVESTMENTS</p>
                                                    </div>
                                                    <div className="deals-div">
                                                        <h4>03</h4>
                                                        <p>DEALS</p>
                                                    </div>
                                                    <div className="long-term-div">
                                                        <h4>Long Term</h4>
                                                        <p>TYPE</p>
                                                    </div>
                                                </div>
                                                <div className="investor-card-buton-div">
                                                    <button className='create-log-btn'>CREATE LOG</button>
                                                    <button className='details-btn'><Link to={"/investor-single"}>VIEW DETAILS</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <MainComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Investors