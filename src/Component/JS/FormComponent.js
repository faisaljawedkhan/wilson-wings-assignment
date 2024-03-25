import React, { useEffect, useState } from 'react'
import "../../Pages/CSS/AddInvestor.css"
import "../../Pages/CSS/Investors.css"
import image10 from "../../Assets/Navbar/investor-image.png"

const FormComponent = () => {
    // const [formData, setFormData] = useState({});
    // // const history = useHistory();
    const [image, setImage] = useState(null);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setImage(URL.createObjectURL(imageFile));
        setFormData({ ...formData, image: imageFile });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const cards = JSON.parse(localStorage.getItem('cards')) || [];
    //     localStorage.setItem('cards', JSON.stringify([...cards, formData]));
    //     setFormData({});
    //     // history.push('/');
    //     setFormData({});
    //     setImage(null);
    //     // Show modal logic
    // };
    const [formData, setFormData] = useState({});
    const [cards, setCards] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCards([...cards, formData]);
        setFormData({});
        setImage(null);
    };
    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);
    return (
        <>
            <div className="col-md-12 add-investor-form-div">
                <form action="" onSubmit={handleSubmit}>
                    <div className="container-fluid">
                        <div className="row justify-flex-start">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="formFile" className="form-label">Investor Profile Photo</label>
                                <input className="form-control" type="file" id="formFile" name='formFile' onChange={handleImageChange} />
                                {image && <img src={image10} alt="Uploaded" />}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="investorName" className="form-label">Investor Name</label>
                                <input type="text" className="form-control" id="investorName" name='investorName' placeholder="Enter investor name" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="investorEmail" className="form-label">Investor Email address</label>
                                <input type="email" className="form-control" id="investorEmail" name='investorEmail' placeholder="Enter email address" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="contactNumber" name='contactNumber' placeholder="Enter contact number" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="chooseCountry" className="form-label">Country</label>
                                <select className="form-select" aria-label="Default select example" id='chooseCountry' name='chooseCountry' onChange={handleInputChange}>
                                    <option selected>Choose Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="chooseCity" className="form-label">City</label>
                                <select className="form-select" aria-label="Default select example" id='chooseCity' name='chooseCity' onChange={handleInputChange}>
                                    <option selected>Choose City</option>
                                    <option value="New Delhi">New Delhi</option>
                                    <option value="New York">New York</option>
                                    <option value="London">London</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="investorType" className="form-label">Investor Type</label>
                                <select className="form-select" aria-label="Default select example" id='investorType' name='investorType' onChange={handleInputChange}>
                                    <option selected>Choose investor type</option>
                                    <option value="Angel investor">Angel investor</option>
                                    <option value="Venture Capitalists">Venture Capitalists</option>
                                    <option value="Crowdfunding investors">Crowdfunding investors</option>
                                    <option value="Corporate investors">Corporate investors</option>
                                    <option value="Retail investors">Retail investors</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="investorBank" className="form-label">Investor Bank</label>
                                <input type="text" className="form-control" id="investorBank" name='investorBank' placeholder="Investor Bank Name" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="investorAccount" className="form-label">Investor Account No</label>
                                <input type="number" className="form-control" id="investorAccount" name='investorAccount' placeholder="Investor Account No" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="subsidiaryEmail" className="form-label">Subsidiary Email-id</label>
                                <input type="email" className="form-control" id="subsidiaryEmail" name='subsidiaryEmail' placeholder="Enter your address" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="subsidiaryBank" className="form-label">Subsidiary Bank Name</label>
                                <input type="text" className="form-control" id="subsidiaryBank" name='subsidiaryBank' placeholder="Enter investor name" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="subsidiaryAccount" className="form-label">Subsidiary Account No</label>
                                <input type="number" className="form-control" id="subsidiaryAccount" name='subsidiaryAccount' placeholder="Enter investor name" onChange={handleInputChange} />
                            </div>
                            <div className="col-md-6 submit-btn-div py-2">
                                <button type="submit" className="submit-btn">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormComponent