import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>

                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>hotel, Tamilnadu, India</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>hotel@info.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-secondary mb-2" href="/login"><i className="fa fa-angle-right mr-2"></i>Hotel</a>
                            <a className="text-secondary mb-2" href="/customerlogin"><i className="fa fa-angle-right mr-2"></i>Customer</a>
                            <a className="text-secondary mb-2" href="/adminlogin"><i className="fa fa-angle-right mr-2"></i>Admin</a>
                        </div>
                    </div>
                   
                    <div className="col-md-4 mb-5">
                        
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                Food Delivery <a className="text-primary" href="#"></a>
                   
                    <a className="text-primary" href=""></a>
                    <br /> <a href="" target="_blank"></a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt="" />
            </div>
        </div>
    </div>

    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>

    </div>
  )
}

export default Footer