import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const storedUname = sessionStorage.getItem('uname');
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/showfarmer')
      .then((response) => setFarmers(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateProvider = (id) => {
    setError('');
    setSuccess('');

    axios.put(`http://127.0.0.1:8000/api/approve/${id}`)
      .then(() => {
        setSuccess('Hotel approved successfully.');
        axios.get('http://127.0.0.1:8000/api/showfarmer')
          .then((response) => setFarmers(response.data.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setError('An error occurred while approving the Hotel.');
        console.error(error);
      });
  };

  return (
    <div>
          <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
               <h3>Hotel Information</h3>
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
        
            <div className="col-lg-8 table-responsive mb-5" >
			
                <table className="table table-light table-borderless table-hover text-center mb-0">
                    <thead className="thead-dark">
                        <tr>
							<th>#</th>
                            <th>Retailer</th>
                            <th>Location</th>
                            <th>Contact</th>
							<th>Proof</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {farmers.map((farmer, index) => (
                    <tbody className="align-middle" key={index}>
						
                        <tr>
                            <td className="align-middle">{index+1}</td>
                            <td className="align-middle">{farmer.name}</td>
                            <td className="align-middle">{farmer.city}</td>
                            <td className="align-middle">{farmer.mobile}</td>
                            <td className="align-middle">
                            <a href={`./uploads/farmerproof/${farmer.proof}`} target="_blank">
                                View
                            </a>
                            </td>
							<td className="align-middle">{farmer.create_date}</td>
							<td className="align-middle">
                            {farmer.status == 0 ? (
                            <a
                              href="#"
                              onClick={() => {
                                if (window.confirm('Are you sure you want to approve the Hotel?')) {
                                  handleUpdateProvider(farmer.id);
                                }
                              }}
                            >
                              Click to Approve
                            </a>
                          ) : (
                            <span style={{ color: 'green' }}>Approved</span>
                          )}
								
							</td>
                        </tr>
                     
                    </tbody>
                     ))}
                </table>
				
            </div>
            <div className="col-lg-4">
                
                <img src="static/img/sh1.jpg" className="img-fluid" />
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdminHome