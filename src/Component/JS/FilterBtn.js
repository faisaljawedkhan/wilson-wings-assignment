import React, { useRef } from 'react'
import image11 from "../../Assets/Navbar/filters.png"
import { BsXCircle } from "react-icons/bs";
import "../CSS/FilterBtn.css"

const FilterBtn = () => {
    const toggleFilterDiv = useRef("");
    const showFilters = () => {
        toggleFilterDiv.current.classList.toggle("show-filter-div")
    }
    const hideFilters = () => {
        toggleFilterDiv.current.classList.remove("show-filter-div")
    }
    return (
        <>
            <div className="filter-section-start-here" ref={toggleFilterDiv}>
                <div className="first-filter-div">
                    <h4>Filters</h4>
                    <p onClick={hideFilters}><BsXCircle /></p>
                </div>
                <div className="amount-invested-div">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-btn-div" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Amount Invested
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                $10M - $20M
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                $21M - $30M
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                $31M - $40M
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                $41M - $50M
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                $51M - $60M
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                &gt; 100M
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="investor-type-div">
                <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-btn-div" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Investor Type
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Angel Investor
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Venture Capitalists
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Crowdfunding Investors
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Corporate Investors
                                            </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Retail Investors
                                            </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="investor-type-btn-div">
                <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button accordion-btn-div" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Investing Type
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body accordion-body-div">
                                    <button className='reset'>RESET</button>
                                    <button className='apply-filters'>APPLY FILTERS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-right-third-div">
                <div className="second-right-third-first-inner-div">
                    <input type="text" class="form-control" id="inputPassword2" placeholder="Search" />
                    <button type="submit" class="filter-btn" onClick={showFilters}><span><img src={image11} alt="" className='img-fluid' /></span><span className='ms-1'>FILTERS</span></button>
                </div>
            </div>
        </>
    )
}

export default FilterBtn