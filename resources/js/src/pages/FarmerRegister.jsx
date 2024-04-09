import React, { useState } from 'react';
import axios from 'axios';
const FarmerRegister = () => {
    const [inputs, setInputs] = useState({
        name: '',
        address: '',
        city: '',
        mobile: '',
        file: null,
        email: '',
        uname: '',
        pass: '',
        cpass: '',
      });
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
    
      const showErrorAlert = (message) => {
        setError(message);
        setSuccess('');
      };
    
      const showSuccessAlert = (message) => {
        setSuccess(message);
        setError('');
      };
    
      const handleChange = (event) => {
        const { name, type, value, files } = event.target;
      
        setInputs({
          ...inputs,
          [name]: type === 'file' ? files[0] : value,
        });
      };
      
      const validate = () => {
        if (inputs.pass !== inputs.cpass) {
          setError('Passwords do not match');
          return false; // Prevent form submission
        }
        return true; // Form is valid, allow submission
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', inputs.name);
        formData.append('address', inputs.address);
        formData.append('city', inputs.city);
        formData.append('mobile', inputs.mobile);
        formData.append('file', inputs.file);
        formData.append('email', inputs.email);
        formData.append('uname', inputs.uname);
        formData.append('pass', inputs.pass);
        if (validate()) {
        axios.post('http://127.0.0.1:8000/api/registerfar', formData)
          .then((response) => {
            if (response.data.success) {
              showSuccessAlert('Register successful. Redirecting...');
              setInputs({ 
                name: '',
                address: '',
                city: '',
                mobile: '',
                file: null,
                email: '',
                uname: '',
                pass: '',
                cpass: '',
    
               });
              setTimeout(() => {
                window.location.href = "/login";
              }, 2000);
            } else {
              showErrorAlert('Both Passwords are do not match');
            }
          })
          .catch(() => {
            showErrorAlert('Register failed. Please check your credentials.');
          });
        }
      };
  return (
    <div>
            <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="/">Home</a>
                    <span className="breadcrumb-item active"><a href="/register">Signup</a></span>
                </nav>
            </div>
        </div>
    </div>
   
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Hotel - Signup</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success">
                    {success && (
                <p style={{ color: 'green' }}>{success}</p>
              )}

              {error && (
                <p style={{ color: 'red' }}>{error}</p>
              )}
                    </div>
					
                    <form name="form1" method="post" onSubmit={handleFormSubmit} encType="multipart/form-data">
						<div className="row">
							<div className="col-md-6 form-group">
								<label>Name</label>
								<input className="form-control" type="text" name="name" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>Address</label>
								<input className="form-control" type="text" name="address" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>City</label>
								<input className="form-control" type="text" name="city" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>Mobile No.</label>
                                <input className="form-control" type="text" name="mobile" onChange={handleChange} required />
							</div>
                            <div className="col-md-6 form-group">
								<label>Select Proof</label>
								<input className="form-control" type="file" name="file" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>E-mail ID</label>
								<input className="form-control" type="text" name="email" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>Username</label>
								<input className="form-control" type="text" name="uname" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>Password</label>
								<input className="form-control" type="password" name="pass" onChange={handleChange} required />
							</div>
							<div className="col-md-6 form-group">
								<label>Confirm Pasword</label>
								<input className="form-control" type="password" name="cpass" onChange={handleChange} required />
							</div>
						</div>
                        
                        <p></p>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" name="btn">Signup</button>
                        </div>
                    </form>
					
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="bg-light p-30 mb-30">
                 <img src="static/img/sh2.jpg" className="img-fluid" />
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

export default FarmerRegister