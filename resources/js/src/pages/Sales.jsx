import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Sales = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/showmysales/${storedUname}`)
          .then((response) => setProducts(response.data.data))
          .catch((error) => console.error(error));
      }, []);
      const handleUpdateHome = (id) => {
        setError('');
        setSuccess('');
        
        axios.put(`http://127.0.0.1:8000/api/homedelivery/${id}`)
          .then(() => {
            setSuccess('Home Delivery Success');
            axios.get(`http://127.0.0.1:8000/api/showmysales/${storedUname}`)
            .then((response) => setProducts(response.data.data))
              .catch((error) => console.error(error));
          })
          .catch((error) => {
            setError('An error occurred while Delivery a product');
            console.error(error);
          });
      };
      const handleUpdateFarm = (id) => {
        setError('');
        setSuccess('');
    
        axios.put(`http://127.0.0.1:8000/api/farmpurchase/${id}`)
          .then(() => {
            setSuccess('Farm Purchasing Success');
            axios.get(`http://127.0.0.1:8000/api/showmysales/${storedUname}`)
            .then((response) => setProducts(response.data.data))
              .catch((error) => console.error(error));
          })
          .catch((error) => {
            setError('An error occurred while Delivery a product');
            console.error(error);
          });
      };
    
  return (
    <div>
      <div id="success">
        {success && (
          <p style={{ color: 'green' }}>{success}</p>
        )}

        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delivery Mode</th>
                  <th>Review</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="align-middle">
              {products.map((product, index) => (
              <tr key={index}>
                  <td className="align-middle">{index + 1}</td>
                  <td className="align-middle">{product.uname}</td>
                  <td className="align-middle">{product.category}</td>
                  <td className="align-middle">{product.pname}</td>
                  <td className="align-middle">{product.amount}</td>
                  <td className="align-middle">{product.uqut}</td>
                  <td className="align-middle">{product.deli_mode}</td>
                  <td className="align-middle"><a href={`/allrev?pid=${product.id}`}>click</a></td>
                  <td className="align-middle">
                  {(product.deli_mode === 'Home Delivery' && product.d_status === '') ? (
                          <a
                            href="#"
                            onClick={() => {
                              if (window.confirm('Are you sure you want to deliver the product?')) {
                                handleUpdateHome(product.id);
                              }
                            }}
                          >
                           
                            Home Delivery
                          </a>
                        ) : (
                          product.deli_mode === 'Direct Delivery' && product.d_status === '' ? (
                            <a
                              href="#"
                              onClick={() => {
                                if (window.confirm('Are you sure you want to deliver the Food?')) {
                                  handleUpdateFarm(product.id);
                                }
                              }}
                            >
                              Direct Delivery
                            </a>
                          ) : (
                            <span style={{ color: 'green' }}>Food Delivered</span>
                          )
                        )}

                    <br />
                  </td>
                </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <img src="static/img/sh1.jpg" className="img-fluid" alt="Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
