import React from "react";

export default function Header() {
  return (
    <>
      {/* Desktop header */}
      <div className="menu-right pull-right">
        <div>
          <nav id="main-nav">
            <div className="toggle-nav">
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul
              id="main-menu"
              className="sm pixelstrap sm-horizontal"
              data-smartmenus-id="17045489986765017"
            >
              <li>
                <div className="mobile-back text-right">
                  Back
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Clicnics</a>
              </li>
              {/* <li>
                <a href="#">pages</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li> */}
            </ul>
          </nav>
        </div>
        <div>
          <div className="icon-nav">
            <ul>
              {/*  <li className="onhover-div mobile-search">
                <div>
                  <img
                    src="../assets/images/icon/search.png"
                    onclick="openSearch()"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />{" "}
                  <i className="ti-search" onclick="openSearch()"></i>
                </div>
                <div id="search-overlay" className="search-overlay">
                  <div>
                    <span
                      className="closebtn"
                      onclick="closeSearch()"
                      title="Close Overlay"
                    >
                      ×
                    </span>
                    <div className="overlay-content">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <form>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Search a Product"
                                />
                              </div>
                              <button type="submit" className="btn btn-primary">
                                <i className="fa fa-search"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
              {/*  <li className="onhover-div mobile-setting">
                <div>
                  <img
                    src="../assets/images/icon/setting.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />{" "}
                  <i className="ti-settings"></i>
                </div>
                <div className="show-div setting">
                  <h6>language</h6>
                  <ul>
                    <li>
                      <a href="#">english</a>
                    </li>
                    <li>
                      <a href="#">french</a>
                    </li>
                  </ul>
                  <h6>currency</h6>
                  <ul className="list-inline">
                    <li>
                      <a href="#">euro</a>
                    </li>
                    <li>
                      <a href="#">rupees</a>
                    </li>
                    <li>
                      <a href="#">pound</a>
                    </li>
                    <li>
                      <a href="#">doller</a>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li className="onhover-div mobile-cart">
                <div>
                  <img
                    src="../assets/images/icon/service3.png"
                    className="img-fluid blur-up lazyload notification-icon"
                    alt=""
                  />{" "}
                  <i className="ti-shopping-cart"></i>
                </div>
                <ul className="show-div shopping-cart">
                  <li>
                    <div className="media">
                      <a href="#">
                        <img
                          className="mr-3"
                          src="../assets/images/fashion/product/1.jpg"
                          alt="Generic placeholder image"
                        />
                      </a>
                      <div className="media-body">
                        <a href="#">
                          <h4>item name</h4>
                        </a>
                        <h4>
                          <span>1 x $ 299.00</span>
                        </h4>
                      </div>
                    </div>
                    <div className="close-circle">
                      <a href="#">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <a href="#">
                        <img
                          className="mr-3"
                          src="../assets/images/fashion/product/2.jpg"
                          alt="Generic placeholder image"
                        />
                      </a>
                      <div className="media-body">
                        <a href="#">
                          <h4>item name</h4>
                        </a>
                        <h4>
                          <span>1 x $ 299.00</span>
                        </h4>
                      </div>
                    </div>
                    <div className="close-circle">
                      <a href="#">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="total">
                      <h5>
                        subtotal : <span>$299.00</span>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="buttons">
                      <a href="cart.html" className="view-cart">
                        view cart
                      </a>{" "}
                      <a href="#" className="checkout">
                        checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
