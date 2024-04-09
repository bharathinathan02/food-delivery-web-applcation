import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Cart = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/showcart/${storedUname}`)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.error(error));
  }, []);
  const handleDeleteProduct = (id) => {
    setError('');
    setSuccess('');

    axios.delete(`http://127.0.0.1:8000/api/deletecart/${id}`)
      .then(() => {
        setSuccess('Cart deleted successfully.');
        axios.get(`http://127.0.0.1:8000/api/showcart/${storedUname}`)
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
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="/userhome">
                Home
              </a>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
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
            <form name="form1" method="post" action="">
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="align-middle">
                      <img src={`./uploads/products/${product.pimage}`} alt="cartphoto" style={{ width: '50px' }} />
                    </td>
                    <td className="align-middle">Rs.{product.price} </td>
                    <td className="align-middle">
                      <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                      <input
                          type="text"
                          name="qty[]"
                          className="form-control form-control-sm bg-secondary border-0 text-center"
                          value={quantities[index]}
                          onChange={(e) => handleQuantityChange(index, e.target.value)}
                        />
                        <span style={{ color: '#FF0000' }}> products only available</span>
                      </div>
                    </td>
                    <td className="align-middle">{product.price * quantities[index]}</td>
                    <td className="align-middle">
                      <a href="#" 
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete the cart?')) {
                          handleDeleteProduct(product.id);
                        }
                      }}
                      >
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                 
                      ))}
                </tbody>
                
              </table>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <input type="submit" name="btn" className="btn btn-block btn-primary font-weight-bold my-3 py-3" value="Check" />
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>Rs. </h5>
                </div>
                Sending OTP...
                <iframe src="http://iotcloud.co.in/testmail/testmail1.php?message={{mess}}&email={{email}}&subject=OTP" width="10" height="10" frameBorder="1"></iframe>

                <form name="form3" method="post" action="">
                  <input type="hidden" name="ch" value="3" />
                  <input type="text" name="otp" className="form-control" placeholder="Enter OTP" required />
                  <button type="submit" className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                    Confirm
                  </button>
                </form>
                <form name="form2" method="post" action="">
                  <input type="hidden" name="ch" value="2" />
                  <input type="text" name="card" className="form-control" placeholder="Card No." required />
                  <button type="submit" className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                    Buy Now
                  </button>
                </form>

                <span style={{ color: '#FF0000' }}>You are not given Quantity!!</span>
                <span style={{ color: '#FF0000' }}>OTP Wrong!!</span>

                <iframe src="http://iotcloud.co.in/testmail/testmail1.php?message={{mess}}&email={{email}}&subject=Purchase" width="10" height="10" frameBorder="1"></iframe>
                <span style={{ color: '#009900' }}>Paid Successfully</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
