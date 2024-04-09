import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerHome = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/showproducts/${storedUname}`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.error(error));
  }, []);
  const handleDeleteProduct = (id) => {
    setError('');
    setSuccess('');

    axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${id}`)
      .then(() => {
        setSuccess('Product deleted successfully.');
        axios.get(`http://127.0.0.1:8000/api/showproducts/${storedUname}`)
        .then((response) => setProducts(response.data.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setError('An error occurred while Deleting the product.');
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <h3>Foods</h3>
          </div>
        </div>
      </div>

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
                  <th>&nbsp;</th>
                  <th>Category</th>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="align-middle">{index + 1}</td>
                    <td className="align-middle">
                      <a href={`./uploads/products/${product.photo}`} target="_blank">
                        <img src={`./uploads/products/${product.photo}`} width="100" height="100" alt="Product" />
                      </a>
                    </td>
                    <td className="align-middle">{product.category}</td>
                    <td className="align-middle">{product.product}</td>
                    <td className="align-middle">{product.price}</td>
                    <td className="align-middle">{product.quantity}
                    {product.status === '1' && product.required_qty === '0' ? (
                        <span style={{ color: '#FF0000' }}>[Low]</span>
                      ) : (
                        product.status === '0' && (
                          <span style={{ color: '#FF0000' }}>[required {product.quantity}]</span>
                        )
                      )}
                                </td>
                    <td className="align-middle">
                      <a href={`/edit?pid=${product.id}&retailer=${product.retailer}&price=${product.price}`}>Edit</a> /
                      <a
                              href="#"
                              onClick={() => {
                                if (window.confirm('Are you sure you want to delete the product?')) {
                                  handleDeleteProduct(product.id);
                                }
                              }}
                            >
                              Delete
                            </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <img src="static/img/sh1.jpg" className="img-fluid" alt="Sample" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerHome;
