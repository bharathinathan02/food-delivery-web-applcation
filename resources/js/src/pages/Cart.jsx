import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Cart = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [inputs, setInputs] = useState({ otp: '', uname: storedUname,});
  const [deliveryMode, setDeliveryMode] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [correct, setCorrect] = useState('');
  const [wrong, setWrong] = useState('');
  const [paid, setPaid] = useState('');
  const [not, setNot] = useState('');

 
  const [iframeURL, setIframeURL] = useState('');
  const [redirectTimer, setRedirectTimer] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/showcart/${storedUname}`)
      .then((response) => {
        setProducts(response.data.data);
        // Initialize quantities based on the response
        setQuantities(Array(response.data.data.length).fill(0));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteProduct = (id) => {
    setError('');
    setSuccess('');

    axios.delete(`http://127.0.0.1:8000/api/deletecart/${id}`)
      .then(() => {
        setSuccess('Cart deleted successfully.');
        // Refresh the cart data after deletion
        axios.get(`http://127.0.0.1:8000/api/showcart/${storedUname}`)
          .then((response) => {
            setProducts(response.data.data);
            setQuantities(Array(response.data.data.length).fill(0));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setError('An error occurred while Deleting the product.');
        console.error(error);
      });
  };

  const handleQuantityChange = (index, newQuantity) => {
    // Update the quantity in the local state
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const totalAmount = calculateTotal();

    if (totalAmount === 0) {
      setError('Total amount is zero. Please update quantities before submitting.');
      return;
    }

    const requestData = {
      uname: storedUname,
      deli_mode: deliveryMode,
      shipping_address: shippingAddress,
      products: products
        .map((product, index) => ({
          id: product.id,
          qty: quantities[index],
          price: product.price,
          total: product.price * quantities[index],
        }))
        .filter((product) => product.qty !== 0 || product.total !== 0),
    };
    
    

    // Make a PUT request to update quantities on the server
    axios.put('http://127.0.0.1:8000/api/updatecart', requestData)
      .then(() => {
        setSuccess('Quantities updated successfully.');
      })
      axios.get(`http://127.0.0.1:8000/api/get_customer_details/${storedUname}`)
            .then((apiResponse) => {
              const apiData = apiResponse.data;
              const newIframeURL = `http://iotcloud.co.in/testsms/sms.php?sms=emr&name=${apiData.name}&mess=otp-${apiData.otp}&mobile=${apiData.mobile}`;
              setIframeURL(newIframeURL);

              // Open the iframe in a new tab
              window.open(newIframeURL, '_blank');

              // Set a timer to redirect after 2 seconds
              
            })
      .catch((error) => {
        setError('An error occurred while updating quantities.');
        console.error(error);
      });
  };

  const calculateTotal = () => {
    return products.reduce((total, product, index) => total + (product.price * quantities[index]), 0);
  };

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  
  const handleFormOtpSubmit = (event) => {
    event.preventDefault();


    axios.post('http://127.0.0.1:8000/api/verifyotppost', inputs)
      .then((response) => {
        if (response.data.success) {
          setCorrect('Otp Verified.');
          setWrong('');
          setError('');
          setSuccess('');
          setInputs({ otp: '', uname: storedUname, });

    } else {
        setWrong('Otp is Wrong');
    }
  })
  .catch(() => {
    showErrorAlert('Otp is Wrong');
  });
};
const handlePaymentSubmit = (event) => {
  event.preventDefault();

  const requestData = {
    uname: storedUname,
    products: products
      .map((product, index) => ({
        id: product.id,
        qty: quantities[index],
        price: product.price,
        total: product.price * quantities[index],
      }))
      .filter((product) => product.qty !== 0 || product.total !== 0),
  };

  axios.put('http://127.0.0.1:8000/api/paymentway', requestData)
    .then(() => {
      setPaid('Paid Successfully.');
      setSuccess('');
      setCorrect('');
      setTimeout(() => {
        window.location.href = "/purchased";
      }, 5000);
    })
    .catch((error) => {
      setNot('An error occurred while processing the payment.');
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
            <form name="form1" method="post" onSubmit={handleFormSubmit}>
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Food</th>
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
                      <tr>
                        <td className="align-middle">
                          <label>Delivery Mode</label>
                          <select
                            name="deli_mode"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={deliveryMode}
                            onChange={(e) => setDeliveryMode(e.target.value)}
                          >
                            <option value="">Choose</option>
                            <option value="Home Delivery">Home Delivery</option>
                            <option value="Direct Delivery">Direct Delivery</option>
                          </select>
                        </td>
                        <td className="align-middle">
                          <label>Shopping Address</label>
                          <textarea
                            name="shipping_address"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                          ></textarea>
                        </td>
                      </tr>

  
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
                            <h5>Rs.{calculateTotal()}</h5>
                        </div>

                

                <form name="form3" method="post" onSubmit={handleFormOtpSubmit}>
                  <input type="text" name="otp" className="form-control" placeholder="Enter OTP" onChange={handleChange} required />
                  <button type="submit" className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                    Confirm
                  </button>
                </form>
                <div id="success">
                    {correct && (
                      <p style={{ color: 'green' }}>{correct}</p>
                    )}

                    {wrong && (
                      <p style={{ color: 'red' }}>{wrong}</p>
                    )}
                  </div>
                <form name="form2" method="post" onSubmit={handlePaymentSubmit}>
                  <input type="text" name="card" className="form-control" placeholder="Card No." required />
                  <button type="submit" className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                    Buy Now
                  </button>
                </form>

                <div id="success">
                    {paid && (
                      <p style={{ color: 'green' }}>{paid}</p>
                    )}

                    {not && (
                      <p style={{ color: 'red' }}>{not}</p>
                    )}
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
