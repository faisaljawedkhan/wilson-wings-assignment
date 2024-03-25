import React from 'react'
import "../../Pages/CSS/Investors.css"
import { Link } from 'react-router-dom'
import image1 from "../../Assets/Navbar/fi_4853930.png"
import image2 from "../../Assets/Navbar/lucide_chevron-last.png"
import image3 from "../../Assets/Navbar/fi_1828791.png"
import image4 from "../../Assets/Navbar/fi_2891526.png"
import image5 from "../../Assets/Navbar/icon-2.png"
import image6 from "../../Assets/Navbar/fi_8140067.png"
import image7 from "../../Assets/Navbar/Log 4.png"
import image8 from "../../Assets/Navbar/image 1.png"
import image9 from "../../Assets/Navbar/icon-3.png"

const Navbar = () => {
    return (
        <>
            <div className="col-md-3 main-nav-first-div">
                <div className="main-left-navbar">
                    <div className="first-nav-menu">
                        <h2><span><img src={image1} alt="" className='img-fluid' /></span><span>gsf</span></h2>
                        <img src={image2} alt="" className='img-fluid k-img' />
                    </div>
                    <div className="second-nav-menu">
                        <ul>
                            <li><button><Link to={"/"}><span><img src={image3} alt="" /></span><span className='ms-3'>Dashboard</span></Link></button></li>
                            <li><button><Link to={"/"}><span><img src={image4} alt="" /></span><span className='ms-3'>Companies</span></Link></button></li>
                            <li>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span><img src={image5} alt="" /></span><span className='ms-3'>Deals</span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>Primary Deals</p>
                                                <p>Secondary Deals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><button><Link to={"/"}><span><img src={image6} alt="" /></span><span className='ms-3'>Investors</span></Link></button></li>
                            <li><button><Link to={"/"}><span><img src={image7} alt="" /></span><span className='ms-3'>Logs</span></Link></button></li>
                        </ul>
                    </div>
                    <div className="third-nav-menu">
                        <h5><span><img src={image8} alt="" className='img-fluid' /></span><span className='ms-2' style={{color: "#FFFFFF", fontSize: "18px"}}>Sayeed Afzal</span></h5>
                        <img src={image9} alt="" className='img-fluid third-nav-second-image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar