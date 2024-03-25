import React from 'react'
import "../../Pages/CSS/AddInvestor.css"
import "../../Pages/CSS/Investors.css"
import "../../Pages/CSS/InvestorSingle.css"
import image11 from "../../Assets/Navbar/investor-image.png"
import image12 from "../../Assets/Navbar/Group 33.png"
import image10 from "../../Assets/Navbar/left-icon.png"

const ShareReportFile = () => {
    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send Email</h1>
                            <img src={image12} alt="" className='img-fluid' data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" name='subject' placeholder="Portfolio Updates" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-id" className="form-label">Email-id</label>
                                <input type="email" className="form-control" id="email-id" name="email-id" placeholder="rajeshsinha@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="notes" className="form-label">Notes / Info</label>
                                <input type="email" className="form-control" id="notes" name="notes" placeholder="Add Details" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Attachment</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="send-mail-btn">SEND MAIL</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal END */}
            <div className="second-right-second-div mb-0">
                <div className="second-right-second-first-inner-div">
                    <h3><span className='second-right-second-div-image'><img src={image10} alt="" className='img-fluid' /></span><span><img src={image11} alt="" className='img-fluid ms-2' /></span><span className="second-right-second-div-heading ms-2">All Investors</span></h3>
                    <div className="create-log-and-share-report-div">
                        <button className='ms-2'>CREATE LOG</button>
                        <button className='ms-2' data-bs-toggle="modal" data-bs-target="#exampleModal">SHARE REPORT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareReportFile