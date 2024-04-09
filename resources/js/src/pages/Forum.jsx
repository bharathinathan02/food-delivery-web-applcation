import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Forum = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [forums, setforums] = useState([]);
    const [inputs, setInputs] = useState({
        category: '',
        subcategory: '',
        question: '',
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
          const response = await axios.post('http://127.0.0.1:8000/api/forumpost', inputs);
    
          if (response.data.success) {
            showSuccessAlert('Forum Added');
            fetchForumData();
            setInputs({
              category: '',
              subcategory: '',
              question: '',
              uname: storedUname,
            });
          } else {
            showErrorAlert('Error');
          }
        } catch (error) {
          showErrorAlert('An error occurred while adding the forum.');
          console.error(error);
        }
      };
      useEffect(() => {
        fetchForumData();
      }, []);
    
      const fetchForumData = () => {
        axios.get(`http://127.0.0.1:8000/api/allforums`)
            .then((response) => {
                setforums(response.data.data);
            })
            .catch((error) => {
                showErrorAlert('An error occurred while fetching forum data.');
                console.error(error);
            });
    };
    
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <h3>Forum Post</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3"></span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-12 mb-5">
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
                  <div className="col-md-9 form-group">
                    <label>Category</label>
                    <input className="form-control" type="text" name="category" value={inputs.category} onChange={handleChange} required />
                  </div>
                  <div className="col-md-9 form-group">
                    <label>sub Category</label>
                    <input className="form-control" type="text" name="subcategory" value={inputs.subcategory} onChange={handleChange} required />
                  </div>
                  <div className="col-md-9 form-group">
                    <label>Your Forum</label>
                    <textarea name="question" className="form-control" cols="6" rows="2" value={inputs.question} onChange={handleChange} ></textarea>
                  </div>
                </div>

                <p></p>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" name="btn">
                    Add
                  </button>
                </div>
              </form>
              <span style={{ color: '#FF0000' }}></span>

              <p></p>
              <div className="container mt-4">
  {forums.map((forum, index) => (
    <div key={index}>
      <div className="card mb-4">
        <div className="card-header bg-primary text-light">
          <h5 className="mb-0">Posted By: {forum.uname}</h5>
          <span>Posted On: {forum.forum_date}</span>
        </div>

        <div className="card-body">
        <h5 style={{ color: 'green' }}>Forum{index+1}:</h5><br />

          <p className="card-text">{forum.question}</p>
        </div>

        {forum.answers && (
          <div className="card-body">
            <h5 style={{ color: 'green' }}>Answers:</h5>
            {forum.answers.map((answer, ansIndex) => (
              <div key={ansIndex} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', color: '#333' }}>Answered By: {answer.answerby}</p>
                <p>{answer.answer}</p>
                <p style={{ fontStyle: 'italic', color: '#777' }}>Answered On: {answer.ans_date}</p>
              </div>
            ))}
          </div>
        )}

        <div className="card-body text-center">
          <a href={`/ans?catid=${forum.id}&category=${forum.category}`} className="btn btn-info">
            Reply
          </a>
        </div>
      </div>
    </div>
  ))}
</div>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum; 
