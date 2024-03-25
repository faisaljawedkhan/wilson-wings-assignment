import React from 'react'
import "../CSS/Investors.css";
import "../CSS/AddInvestor.css"
import Navbar from '../../Component/JS/Navbar';
import image12 from "../../Assets/Navbar/Funds 1.png"
import image13 from "../../Assets/Navbar/Vector (1).png"
import image14 from "../../Assets/Navbar/growth 1.png"
import image15 from "../../Assets/Navbar/pie-chart (1) 1.png"
import image16 from "../../Assets/Navbar/Frame 241963.png"
import "../CSS/InvestorSingle.css"
import ShareReportFile from '../../Component/JS/ShareReportFile';

const InvestorSingle = () => {
    return (
        <>
            <section className="investors-main-page-section-start-here">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Navbar />
                        <div className="col-md-9 main-nav-second-right-div">
                            <div className="second-right-first-div">
                                <h3>Rajesh Sinha</h3>
                                <p>Investors &gt; Rajesh Sinha</p>
                            </div>
                            <ShareReportFile />
                            <div className="portfolio-log-and-investor-details-div">
                                <button className='active-btn'>PORTFOLIO</button>
                                <button className='inactive-btn'>LOG</button>
                                <button className='inactive-btn'>INVESTOR DETAILS</button>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-flex-start">
                                    <div className="col-md-12 add-investor-main-form-div">
                                        <div className="form-heading">
                                            <h2>Investment Details</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-12 add-investor-form-div">
                                        <div className="container-fluid">
                                            <div className="row justify-flex-start">
                                                <div className="col-md-12 fund-details-div">
                                                    <div className="fund-details-first-inner-div">
                                                        <h4>FUND DETAILS</h4>
                                                        <p>Data as on 23 Feb 2023</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image12} alt="" className='img-fluid' />
                                                        <p>Funds Under Management</p>
                                                        <h3>$20,000,000</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image13} alt="" className='img-fluid' />
                                                        <p>Invested Value</p>
                                                        <h3>$15,000,000</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image14} alt="" className='img-fluid' />
                                                        <p>Current Portfolio Value</p>
                                                        <h3>$23,600,000</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image14} alt="" className='img-fluid' />
                                                        <p>Growth Ratio</p>
                                                        <h3><span>$24%</span><span><img src={image16} alt="" className='img-fluid mb-0 ms-3' style={{ width: "25px" }} /></span></h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image15} alt="" className='img-fluid' />
                                                        <p>Invested No of Companies</p>
                                                        <h3>06</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image15} alt="" className='img-fluid' />
                                                        <p>Primary Deals</p>
                                                        <h3>04</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image15} alt="" className='img-fluid' />
                                                        <p>Secondary Deals</p>
                                                        <h3>08</h3>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 fund-details-card-div">
                                                    <div className="fund-details-card-first-inner-div">
                                                        <img src={image14} alt="" className='img-fluid' />
                                                        <p>Growth Ratio</p>
                                                        <h3>24%</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 log-details-div">
                                                    <div className="log-details-first-inner-div">
                                                        <h4>Log Details</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Buy</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="committed">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Buy</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="funded">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Buy</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="interested">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Sell</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="interested">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Transfer</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="interested">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                        <div className="log-details-in-table-format">
                                                            <table class="table table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Investor Name</p>
                                                                            <h4>Rajesh Sinha</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Transaction Type</p>
                                                                            <h4>Buy</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Company</p>
                                                                            <h4>SkillsKonnect</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Status</p>
                                                                            <button className="interested">Committed</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p>Creation Date</p>
                                                                            <h4>01-02-2024</h4>
                                                                        </td>
                                                                        <td>
                                                                            <p>Type</p>
                                                                            <h4>Long Term</h4>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="view-details-btn">
                                                            <button>VIEW DETAILS</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 log-details-card-main-div">
                                                    <div className="log-details-card-main-first-inner-div">
                                                        <div className="unique-number-div">
                                                            <h4>#U21086BA12</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InvestorSingle