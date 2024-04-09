import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [inputs, setInputs] = useState({
        uname: '',
        pass: '',
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
        setInputs({ ...inputs, [event.target.name]: event.target.value });
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://127.0.0.1:8000/api/adminloginpost', inputs)
          .then((response) => {
            if (response.data.success) {
              showSuccessAlert('Login successful. Redirecting...');
              setInputs({ uname: '', pass: '' });
              sessionStorage.setItem('uname', inputs.uname);
              setTimeout(() => {
                window.location.href = "/adminhome";
              }, 2000);
            } else {
              showErrorAlert('Invalid username or password.');
            }
          })
          .catch(() => {
            showErrorAlert('Login failed. Please check your credentials.');
          });
      };
    
  return (
    <div><div className="container-fluid">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Admin Login</span></h2>
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
                <form name="form1" method="post" onSubmit={handleFormSubmit}>
                    <div className="control-group">
                        <input type="text" className="form-control" name="uname" placeholder="Username"
                            required="required" onChange={handleChange} />
                        
                    </div>
                    <p></p>
                    <div className="control-group">
                        <input type="password" className="form-control" name="pass" placeholder="Password"
                            required="required" onChange={handleChange} />
                        
                    </div>
                    <p></p>
                    <div>
                        <button className="btn btn-primary py-2 px-4" type="submit" name="btn">Login</button>
                    </div>
                </form>
                <span style={{ color:'#FF0000' }}></span>
                <span style={{ color:'#FF0000' }}></span>
            </div>
        </div>
        <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
             <img src="static/img/sh1.jpg" className="img-fluid" />
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

export default Admin