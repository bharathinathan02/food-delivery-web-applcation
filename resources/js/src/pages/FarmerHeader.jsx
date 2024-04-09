import React from 'react'

const FarmerHeader = () => {
    const storedUname = sessionStorage.getItem('uname');

  return (
    <div>
<div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
            Hotel:{storedUname}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
            <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="/logout">Logout</a>

                        </div>
                    </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
              </a>
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Food</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Delivery</span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            {/* <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form> */}
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
          <div className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
  <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
  <i className="fa fa-angle-down text-dark"></i>
</div>


            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: '999' }}>
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
                <span className="h1 text-uppercase text-primary bg-dark px-2">Food</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Delivery</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="/farmerhome" className="nav-item nav-link">Home</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Foods <i class="fa fa-angle-down mt-1"></i></a>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <a href="/addcategory" className="dropdown-item">Category</a>
                                    <a href="/addproduct" className="dropdown-item">New Foods</a>
									<a href="/sales" className="dropdown-item">Sales</a>
                                </div>

                            </div>
                            <a href="/forum" className="nav-item nav-link">Forum</a>
                            <a href="/logout" className="nav-item nav-link">Logout</a>
                           
                           
                        </div>
                       
                    </div>
                </nav>
            </div>
        </div>
    </div>

    </div>
  )
}

export default FarmerHeader