import React, { useState } from 'react';
import axios from 'axios';

const ReviewSubmit = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [inputs, setInputs] = useState({
        uname: storedUname,
        code: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios.get(`http://127.0.0.1:8000/api/my_review_details/${storedUname}`)
            .then((response) => {
                const otpCode = response.data.data[0].code;
                if (inputs.code === otpCode) {
                    setSuccess('OTP Verified.');
                    setError('');
                    setTimeout(() => {
                        window.location.href = `/purchased`;
                    }, 2000);
                } else {
                    setSuccess('');
                    setError('OTP is incorrect.');
                }
            })
            .catch((error) => {
                console.error(error);
                setSuccess('');
                setError('Failed to verify OTP. Please try again.');
            });
    };

    return (
        <div>
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Review Code</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-6 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success">
                                {success && (
                                    <p style={{ color: 'green' }}>{success}</p>
                                )}
                                {error && (
                                    <p style={{ color: 'red' }}>{error}</p>
                                )}
                            </div>
                            <form name="form1" method="post" onSubmit={handleFormSubmit}>
                                <div className="control-group">
                                    <input type="text" className="form-control" name="code" placeholder="Code" onChange={handleChange} required />
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" name="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <img src="static/img/sh1.jpg" className="img-fluid" alt="Product" />
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Multi Shop, Tamilnadu, India</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@multishop.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSubmit;
