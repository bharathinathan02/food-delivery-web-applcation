import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ForumAnswer = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [catid, setCatid] = useState(null);
    const [category, setCategory] = useState(null);
    const [inputs, setInputs] = useState({
        catid: null,
        category: null,
        answer: '',
        uname: storedUname,
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
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/forumanspost', inputs);
    
          if (response.data.success) {
            showSuccessAlert('Answered!..');
            setInputs({
                catid: null,
                category: null,
                answer: '',
                uname: storedUname,
            });
            setTimeout(() => {
                window.location.href = "/forum";
              }, 2000);
          } else {
            showErrorAlert('Error');
          }
        } catch (error) {
          showErrorAlert('An error occurred while adding the forum answer.');
          console.error(error);
        }
      };
      useEffect(() => {
        const url = new URL(window.location.href);
        const extractedCatid = url.searchParams.get('catid');
        const extractedCategory = url.searchParams.get('category');
        setCatid(extractedCatid || '');
        setCategory(extractedCategory || '');
        setInputs({
          ...inputs,
          catid: extractedCatid || null,
          category: extractedCategory || null,
        });
      }, []);
     
  return (
    <div>
          <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3"></span>Reply</h2>
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
						<div className="row">
							
							<div className="col-md-6 form-group">
								<label>Answer</label>
                                <textarea name="answer" className="form-control" cols="10" rows="5" value={inputs.answer} onChange={handleChange} required></textarea>
							</div>
							
						</div>
                        
                        <p></p>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" name="btn">Submit</button>
                        </div>
                    </form>
					<span style={{ color:'#FF0000' }}></span>
					
					
					<p></p>
					
					
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

export default ForumAnswer