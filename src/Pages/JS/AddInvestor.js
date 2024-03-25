import React from 'react'
import "../CSS/Investors.css";
import "../CSS/AddInvestor.css"
import image10 from "../../Assets/Navbar/left-icon.png"
import Navbar from '../../Component/JS/Navbar';
import FormComponent from '../../Component/JS/FormComponent';

const AddInvestor = () => {
    return (
        <>
            <section className="investors-main-page-section-start-here">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Navbar />
                        <div className="col-md-9 main-nav-second-right-div">
                            <div className="second-right-first-div">
                                <h3>Investors</h3>
                                <p>Investors &gt; Add Investor</p>
                            </div>
                            <div className="second-right-second-div">
                                <div className="second-right-second-first-inner-div">
                                    <h3><span className='second-right-second-div-image'><img src={image10} alt="" className='img-fluid' /></span><span className="second-right-second-div-heading ms-2">All Investors</span></h3>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-flex-start">
                                    <div className="col-md-12 add-investor-main-form-div">
                                        <div className="form-heading">
                                            <h2>Overview</h2>
                                        </div>
                                    </div>
                                    <FormComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddInvestor