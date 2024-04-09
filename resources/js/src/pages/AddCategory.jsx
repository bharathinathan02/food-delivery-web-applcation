import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCategory = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [categories, setCategories] = useState([]);
    const [inputs, setInputs] = useState({
      category: '',
      retailer: storedUname,
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
  
    useEffect(() => {
      fetchCategoryData();
    }, []);
  
    const fetchCategoryData = () => {
        axios.get(`http://127.0.0.1:8000/api/allcategory/${storedUname}`)
        .then((response) => {
          setCategories(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://127.0.0.1:8000/api/addcategorypost', inputs)
        .then((response) => {
          if (response.data.success) {
            showSuccessAlert('Category Added');
            fetchCategoryData(); 
            setInputs({ category: '', retailer: storedUname });
          } else {
            showErrorAlert('Error');
          }
        })
        .catch((error) => {
          showErrorAlert('An error occurred while adding the category.');
          console.error(error);
        });
    };

  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <h3>Category</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3"></span>
        </h2>
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
                    <label>Category</label>
                    <input className="form-control" type="text" name="category" required onChange={handleChange} />
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
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td className="align-middle">{category.id}</td>
                      <td className="align-middle">{category.category}</td>
                      <td className="align-middle">
                        <a href={`add_cat.php?act=del&did=${category.id}`}>Delete</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
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
  );
};

export default AddCategory;
