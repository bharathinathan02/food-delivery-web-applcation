import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = () => {
  const [pid, setPid] = useState(null);
  const [defaults, setDefaults] = useState([]);
  const [inputs, setInputs] = useState({
    pid: '',
    retailer: '',
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
    }, 5000);
  };

  const showSuccessAlert = (message) => {
    setSuccess(message);
    setError('');
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const handleChange = (event) => {
    const { name, type, value, files } = event.target;

    setInputs({
      ...inputs,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pid', pid);
    formData.append('retailer', inputs.retailer);
    formData.append('price', inputs.price);
    formData.append('qty', inputs.qty);
    formData.append('details', inputs.details);
    formData.append('file', inputs.file);

    axios
      .put(`http://127.0.0.1:8000/api/editproductpost/${pid}`, formData)
      .then((response) => {
        if (response.data.success) {
          showSuccessAlert('Product Edited');
          setInputs({
            pid: '',
            retailer: '',
            price: '',
            qty: '',
            details: '',
            file: null,
          });
          setTimeout(() => {
            window.location.href = '/farmerhome';
          }, 2000);
        } else {
          showErrorAlert('Error');
        }
      })
      .catch((error) => {
        showErrorAlert('An error occurred while Edit the Product.');
        console.error(error);
      });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const extractedPid = url.searchParams.get('pid');
    setPid(extractedPid);
  }, []);

  useEffect(() => {
    if (pid) {
      fetchProductData();
    }
  }, [pid]);

  const fetchProductData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/farmer-view-product/${pid}`)
      .then((response) => {
        setDefaults(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <h3>Edit Product</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3"></span>
        </h2>
        <div className="row px-xl-5">
          {defaults.map((default1, index) => (
            <div className="col-lg-7 mb-5" key={index}>
              <div className="contact-form bg-light p-30">
                <div id="success">
                  {success && <p style={{ color: 'green' }}>{success}</p>}

                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>

                <form
                  name="form1"
                  method="post"
                  onSubmit={handleFormSubmit}
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Retailer</label>
                      <input
                        className="form-control"
                        type="text"
                        name="retailer"
                        value={default1.retailer}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Price</label>
                      <input
                        className="form-control"
                        type="text"
                        name="price"
                        defaultValue={default1.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Quantity</label>
                      <input
                        className="form-control"
                        type="text"
                        name="qty"
                        defaultValue={default1.qty}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="details"
                        defaultValue={default1.details}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label>Product Photo</label>
                      <input
                        className="form-control"
                        type="file"
                        name="file"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <p></p>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="submit"
                      name="btn"
                    >
                      Edit Product
                    </button>
                  </div>
                </form>
                <span style={{ color: '#FF0000' }}></span>
              </div>
            </div>
          ))}
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <img
                src="static/img/sh2.jpg"
                className="img-fluid"
                alt="Product Preview"
              />
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>Multi
                Shop, Tamilnadu, India
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>
                info@multishop.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
                67890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
