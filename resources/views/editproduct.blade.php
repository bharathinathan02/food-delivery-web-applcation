@extends('layouts.adminlayout')
  @section('form')
  <div>
    <div class="container-fluid">
            <div class="row bg-secondary py-1 px-xl-5">
              <div class="col-lg-6 d-none d-lg-block">
                <div class="d-inline-flex align-items-center h-100">
                Farmer: {{ $retailer }}
                </div>
              </div>
              <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                            <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="/logout">Logout</a>
    
                            </div>
                        </div>
                </div>
                <div class="d-inline-flex align-items-center d-block d-lg-none">
                  <a href="" class="btn px-0 ml-2">
                    <i class="fas fa-heart text-dark"></i>
                    <span class="badge text-dark border border-dark rounded-circle" style="paddingBottom: 2px">0</span>
                  </a>
                  <a href="" class="btn px-0 ml-2">
                    <i class="fas fa-shopping-cart text-dark"></i>
                    <span class="badge text-dark border border-dark rounded-circle" style="paddingBottom: 2px">0</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
              <div class="col-lg-4">
                <a href="" class="text-decoration-none">
                  <span class="h1 text-uppercase text-primary bg-dark px-2">Agro</span>
                  <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">culture</span>
                </a>
              </div>
              <div class="col-lg-4 col-6 text-left">
                {{-- {/* <form action="">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products" />
                    <div class="input-group-append">
                      <span class="input-group-text bg-transparent text-primary">
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </form> */} --}}
              </div>
              <div class="col-lg-4 col-6 text-right">
                <p class="m-0">Customer Service</p>
                <h5 class="m-0">+012 345 6789</h5>
              </div>
            </div>
          </div>
          <div class="container-fluid bg-dark mb-30">
            <div class="row px-xl-5">
                <div class="col-lg-3 d-none d-lg-block">
                    <a class="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; padding: 0 30px;">
                        <h6 class="text-dark m-0"><i class="fa fa-bars mr-2"></i>Categories</h6>
                        <i class="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 999;">
                        <div class="navbar-nav w-100">
                            <div class="nav-item dropdown dropright">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Rice <i class="fa fa-angle-right float-right mt-1"></i></a>
                                <div class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                    <a href="" class="dropdown-item">Basmati rice</a>
                                    <a href="" class="dropdown-item">Brown rice</a>
                                </div>
                            </div>
                            <a href="" class="nav-item nav-link">Wheat</a>
                            <a href="" class="nav-item nav-link">Fruits</a>
                            <a href="" class="nav-item nav-link">Vegitables</a>
                          
                        </div>
                    </nav>
                </div>
              <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                  <a href="" class="text-decoration-none d-block d-lg-none">
                    <span class="h1 text-uppercase text-primary bg-dark px-2">Agro</span>
                        <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">culture</span>
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <a href="/farmerhome" class="nav-item nav-link">Home</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Products <i class="fa fa-angle-down mt-1"></i></a>
                                    <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                        <a href="/addcategory" class="dropdown-item">Category</a>
                                        <a href="/addproduct" class="dropdown-item">New Products</a>
                      <a href="/sales" class="dropdown-item">Sales</a>
                                    </div>
    
                                </div>
                                <a href="/forum" class="nav-item nav-link">Forum</a>
                                <a href="/logout" class="nav-item nav-link">Logout</a>
                               
                               
                            </div>
                           
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    
        </div>
  <div>
    <div class="container-fluid">
      <div class="row px-xl-5">
        <div class="col-12">
          <h3>Edit Product</h3>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span class="bg-secondary pr-3"></span>
      </h2>
      <div class="row px-xl-5">
          <div class="col-lg-7 mb-5">
            <div class="contact-form bg-light p-30">
              <div id="success">
                @if(Session::has('success'))
              <div style="color: green;">
                  {{ Session::get('success') }}
              </div>
          @endif

          @if(Session::has('error'))
              <div style="color: red;">
                  {{ Session::get('error') }}
              </div>
          @endif
                
              </div>

              

          <form name="form1" action="{{ route('editproductpost') }}" method="POST" enctype="multipart/form-data">
            @csrf
              @method('PUT')
              <input type="hidden" name="pid" value="{{ $pid }}">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <label>Retailer</label>
                    <input
                      class="form-control"
                      type="text"
                      name="retailer"
                      value="{{ $retailer }}"
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="price"

                      
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Quantity</label>
                    <input
                      class="form-control"
                      type="text"
                      name="qty"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Description</label>
                    <input
                      class="form-control"
                      type="text"
                      name="details"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <label>Product Photo</label>
                    <input
                      class="form-control"
                      type="file"
                      name="file"
                      required
                    />
                  </div>
                </div>

                <p></p>
                <div>
                  <button
                    class="btn btn-primary py-2 px-4"
                    type="submit"
                    name="btn"
                  >
                    Edit Product
                  </button>
                </div>
              </form>
              <span style="color:#FF0000"></span>
            </div>
          </div>
     
        <div class="col-lg-5 mb-5">
          <div class="bg-light p-30 mb-30">
            <img
              src="static/img/sh2.jpg"
              class="img-fluid"
              alt="Product Preview"
            />
          </div>
          <div class="bg-light p-30 mb-3">
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-primary mr-3"></i>Multi
              Shop, Tamilnadu, India
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope text-primary mr-3"></i>
              info@multishop.com
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-dark text-secondary mt-5 pt-5">
    <div class="row px-xl-5 pt-5">
        <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 class="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p class="mb-4">Digital Farming is the process of ensuring you carry merchandise that Farmers want, with neither too little nor too much on hand.</p>
            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Agriculture, Tamilnadu, India</p>
            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>agri@info.com</p>
            <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="row">
                <div class="col-md-4 mb-5">
                    <h5 class="text-secondary text-uppercase mb-4">Quick Shop</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-secondary mb-2" href="/"><i class="fa fa-angle-right mr-2"></i>Home</a>
                        <a class="text-secondary mb-2" href="/login"><i class="fa fa-angle-right mr-2"></i>Farmer</a>
                        <a class="text-secondary mb-2" href="/login_cus"><i class="fa fa-angle-right mr-2"></i>Customer</a>
                        <a class="text-secondary mb-2" href="/login_admin"><i class="fa fa-angle-right mr-2"></i>Admin</a>
                    </div>
                </div>
               
                <div class="col-md-4 mb-5">
                    <!--<h5 class="text-secondary text-uppercase mb-4">Newsletter</h5>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Your Email Address">
                            <div class="input-group-append">
                                <button class="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>-->
                    <h6 class="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div class="d-flex">
                        <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row border-top mx-xl-5 py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
        <div class="col-md-6 px-xl-0">
            <p class="mb-md-0 text-center text-md-left text-secondary">
               <?php include("include/title.php"); ?> <a class="text-primary" href="#"></a>
               
                <a class="text-primary" href="https://htmlcodex.com"></a>
                <br> <a href="https://themewagon.com" target="_blank"></a>
            </p>
        </div>
        <div class="col-md-6 px-xl-0 text-center text-md-right">
            <img class="img-fluid" src="img/payments.png" alt="">
        </div>
    </div>
</div>
<!-- Footer End -->


<!-- Back to Top -->
<a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>


<!-- JavaScript Libraries -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>

<!-- Contact Javascript File -->
<script src="mail/jqBootstrapValidation.min.js"></script>
<script src="mail/contact.js"></script>

<!-- Template Javascript -->
<script src="js/main.js"></script>
</body>

</html>


      
@endsection

