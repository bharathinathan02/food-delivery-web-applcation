import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [cid, setCid] = useState(null);
  const [pid, setPid] = useState(null);
  const [inputs, setInputs] = useState({
    cid: null,
    pid: null,
    uname: storedUname,
    review: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [iframeURL, setIframeURL] = useState('');
  const [redirectTimer, setRedirectTimer] = useState(null);

  const showErrorAlert = (message) => {
    setError(message);
    setSuccess('');
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  const showSuccessAlert = (message) => {
    setSuccess(message);
    setError('');
    setTimeout(() => {
      setSuccess('');
    }, 2000);
  };

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    axios.post('http://127.0.0.1:8000/api/reviewpost', inputs)
      .then((response) => {
        if (response.data.success) {
          showSuccessAlert('Review submitted!');
  
          // Construct the iframeURL with data from an API
          axios.get(`http://127.0.0.1:8000/api/my_review_details/${storedUname}`)
            .then((apiResponse) => {
              const apiData = apiResponse.data.data[0]; // Adjust based on the actual structure
              const newIframeURL = `http://iotcloud.co.in/testmail/testmail1.php?message=Your review otp is-${apiData.code}&email=${apiData.email}&subject=OTP`;
              console.log('Constructed URL:', newIframeURL);
  
              setIframeURL(newIframeURL);
  
              // Open the iframe in a new tab
              window.open(newIframeURL, '_blank');
  
              // Set a timer to redirect after 2 seconds
              setRedirectTimer(setTimeout(() => {
                window.location.href = `/verify-review-otp?cid=${cid}&pid=${pid}`;
              }, 2000));
            })
            .catch((apiError) => {
              showErrorAlert('Failed to fetch data from the API');
              console.error(apiError);
            });
        } else {
          showErrorAlert('Error: No review data found for the provided user');
          setSuccess('');
        }
      })
      .catch(() => {
        showErrorAlert('Error submitting or retrieving review details');
        showSuccessAlert('');
      });
  };
  
  
  

  useEffect(() => {
    const url = new URL(window.location.href);
    const extractedCid = url.searchParams.get('cid');
    const extractedPid = url.searchParams.get('pid');
    setCid(extractedCid || '');
    setPid(extractedPid || '');
    setInputs({
      ...inputs,
      cid: extractedCid || null,
      pid: extractedPid || null,
    });
  }, []);

 

  return (
    <div>
            <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Review</span></h2>
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
                            <input type="text" className="form-control" name="review" placeholder="Review"
                                onChange={handleChange} required />
                            
                        </div>
						<p></p>

                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" name="btn">Submit</button>
                        </div>
                    </form>
					<span style={{ color:'#FF0000' }}></span>
					<span style={{ color:'#FF0000' }}></span>
                </div>
            </div>
         
            <p>&nbsp;</p>
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

export default Review