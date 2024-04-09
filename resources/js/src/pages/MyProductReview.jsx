import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProductReview = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/my-product-review/${storedUname}`)
    .then((response) => {
        setProducts((prevProducts) => response.data.data || prevProducts);
      })
      .catch((error) => console.error(error));
    }, [storedUname]);
   

  if (!products) {
    return <p>No reviews found.</p>;
  }

  return (
    <div>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-2 mb-2">
          <span className="bg-secondary pr-3">Reviews</span>
        </h2>
        <br />
        <br />
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Review</th>
                  <th>Review Date</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="align-middle">{index + 1}</td>
                    <td className="align-middle">{product.uname}</td>
                    <td className="align-middle">{product.review}</td>
                    <td className="align-middle">{product.rdate}</td>
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
}

export default MyProductReview;
