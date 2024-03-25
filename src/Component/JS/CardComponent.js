import React from 'react'
import "../../Pages/CSS/AddInvestor.css"
import "../../Pages/CSS/Investors.css"
import { Link } from 'react-router-dom'

const CardComponent = ({ data }) => {
    return (
        <>
            <div className="second-right-investor-card-first-inner-div">
                <div className="second-right-investor-card-first-main-div">
                    <div className="name-image-email-and-button-div">
                        <div className="investor-name-and-image-div">
                            <img src={data.formFile} alt="" className='img-fluid' />
                            <div className="investor-name-and-email-div ms-2">
                                <h4>{data.investorName}</h4>
                                <p>{data.investorEmail}</p>
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
        </>
    )
}

export default CardComponent