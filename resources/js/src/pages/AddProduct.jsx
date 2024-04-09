import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState({
    retailer: '',
    category: '',
    product: '',
    price: '',
    qty: '',
    details: '',
    file: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const showErrorAlert = (message) => {
    setError(message);
    setSuccess('');
    setTimeout(() => {
      setError('');
    }, 5000); // Clear error message after 5 seconds
  };

  const showSuccessAlert = (message) => {
    setSuccess(message);
    setError('');
    setTimeout(() => {
      setSuccess('');
    }, 5000); // Clear success message after 5 seconds
  };

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;

    setInputs({
      ...inputs,
      [name]: type === 'file' ? files[0] : value,
    });
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
    const formData = new FormData();
    formData.append('retailer', storedUname);
    formData.append('category', inputs.category);
    formData.append('product', inputs.product);
    formData.append('price', inputs.price);
    formData.append('qty', inputs.qty);
    formData.append('details', inputs.details);
    formData.append('file', inputs.file);

    axios.post('http://127.0.0.1:8000/api/addproductpost', formData)
      .then((response) => {
        if (response.data.success) {
          showSuccessAlert('Product Added');
          fetchCategoryData();
          setInputs({
            retailer: '',
            category: '',
            product: '',
            price: '',
            qty: '',
            details: '',
            file: null,
          });
          setTimeout(() => {
            window.location.href = "/farmerhome";
          }, 2000);
        } 
        
        else {
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
            <h3>New Foods</h3>
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

              <form name="form1" method="post" onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>Hotel</label>
                    <input className="form-control" type="text" name="retailer" value={storedUname} disabled />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Category</label>
                    <select className="form-control" name="category" onChange={handleChange} required>
                      <option value="">-Select-</option>
                      {categories.map((category) => (
                        <option value={category.category} key={category.id}>
                          {category.category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Food Name</label>
                    <input className="form-control" type="text" name="product" onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Price</label>
                    <input className="form-control" type="text" name="price" onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Quantity</label>
                    <input className="form-control" type="text" name="qty" onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Description</label>
                    <input className="form-control" type="text" name="details" onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Product Photo</label>
                    <input className="form-control" type="file" name="file" onChange={handleChange} required />
                  </div>
                </div>

                <p></p>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" name="btn">
                    Add Food
                  </button>
                </div>
              </form>
              <span style={{ color: '#FF0000' }}></span>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <img src="static/img/sh2.jpg" className="img-fluid" alt="Product Preview" />
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

export default AddProduct;
