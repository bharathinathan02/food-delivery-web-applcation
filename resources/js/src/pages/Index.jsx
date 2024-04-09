import React from 'react';


const Index = () => {
  
  return (
    <div>
              <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100"></div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="your-valid-url" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Agro</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">culture</span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
              <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 999 }}>
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown dropright">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Rice <i className="fa fa-angle-right float-right mt-1"></i></a>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <a href="" className="dropdown-item">Basmati rice</a>
                    <a href="" className="dropdown-item">Brown rice</a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">Wheat</a>
                <a href="" className="nav-item nav-link">Fruits</a>
                <a href="" className="nav-item nav-link">Vegetables</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">Agro</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">culture</span>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <a href="" className="nav-item nav-link">Home</a>
                  <a href="" className="nav-item nav-link">Farmer</a>
                  <a href="" className="nav-item nav-link">Customer</a>
                  <a href="" className="nav-item nav-link">Admin</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item position-relative active" style={{ height: '430px' }}>
                  <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} alt="Carousel 1" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Agriculture Products</h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Organically produced agricultural products are good for human health, so come to farmers and do business digitally.</p>
                      <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item position-relative" style={{ height: '430px' }}>
                  <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} alt="Carousel 2" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Agriculture Products</h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Organically produced agricultural products are good for human health, so come to farmers and do business digitally.</p>
                      <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item position-relative" style={{ height: '430px' }}>
                  <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{ objectFit: 'cover' }} alt="Carousel 3" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Agriculture Products</h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Organically produced agricultural products are good for human health, so come to farmers and do business digitally.</p>
                      <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-offer mb-30" style={{ height: '200px' }}>
              <img className="img-fluid" src="img/offer-1.jpg" alt="Offer 1" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Agri</h6>
                <h3 className="text-white mb-3">Agroculture</h3>
                <a href="#" className="btn btn-primary">Sale</a>
              </div>
            </div>
            <div className="product-offer mb-30" style={{ height: '200px' }}>
              <img className="img-fluid" src="img/offer-2.jpg" alt="Offer 2" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Agri</h6>
                <h3 className="text-white mb-3">Agroculture</h3>
                <a href="#" className="btn btn-primary">Sale</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: '300px' }} >
              <img className="img-fluid" src="img/offer-1.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Agri</h6>
                <h3 className="text-white mb-3">Digital Farming</h3>
                <a href="" className="btn btn-primary">Sale</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: '300px' }} >
              <img className="img-fluid" src="img/offer-2.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Agri</h6>
                <h3 className="text-white mb-3">Digital Farming</h3>
                <a href="" className="btn btn-primary">Sale</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="bg-light p-4">
                <img src="img/vendor-1.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-2.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-3.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-4.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-5.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-6.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-7.jpg" alt="" />
              </div>
              <div className="bg-light p-4">
                <img src="img/vendor-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Index;
