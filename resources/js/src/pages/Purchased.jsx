import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Purchased = () => {
    const storedUname = sessionStorage.getItem('uname');
    const [products, setProducts] = useState([]);
    /* const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); */
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/showmyproducts/${storedUname}`)
        .then((response) => setProducts(response.data.data))
        .catch((error) => console.error(error));
    }, []);
   
  return (
    <div>
  <div className="container-fluid">
    <h2 className="section-title position-relative text-uppercase mx-xl-2 mb-2">
      <span className="bg-secondary pr-3">Purchased Foods</span>
    </h2>
    <br />
    <br />
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Food</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{product.category}</td>
                <td className="align-middle">{product.pname}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle">{product.uqut}</td>
                <td className="align-middle">{product.amount}</td>
                <td className="align-middle">
                {
                  (product.d_status == 2 && product.status == 3)
                    ? "Farm shopping and direct delivery"
                    : (product.d_status == 1 && product.status == 3)
                    ? "Home Delivered"
                    : "Paid"
                }

                </td>
                <td className="align-middle">
                {
                  (product.d_status == 1 || product.d_status == 2) && product.status == 3
                    ? <a href={`/addreview?cid=${product.id}&pid=${product.pid}`}>Review</a>
                    : (product.status == 2)
                    ? "Wait For Delivery"
                    : null  
                }

                
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


  )
}

export default Purchased