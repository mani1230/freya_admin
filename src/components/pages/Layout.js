import React from "react";
import Header from "../common/Header";
import Mobilenav from "../common/Mobilenav";
import Dashboard from "../pages/Dashboard";
import Footer from "../common/Footer";

export default function Layout(props) {
  const logowidth = {
    width: "17%",
  };
  return (
    <>
      {/* <!-- header start --> */}

      <header>
        {/* <div className="mobile-fix-option"></div> */}
        {/* <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>Welcome to Our store Freya</li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                      - 456 - 7890
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <a href="#">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true"></i> My Account
                    <ul className="onhover-show-div">
                      <li>
                        <a href="#" data-lng="en">
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lng="es">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  {/* Drawer mobile */}
                  <Mobilenav />
                  {/* Drawer end */}
                  <div className="brand-logo">
                    <a href="index.html">
                      <img
                        src="../assets/images/icon/logo.jpeg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                        style={logowidth}
                      />
                    </a>
                  </div>
                </div>
                {/* Desktop header */}
                <Header />
                {/* Desktop */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end -->


    <!-- breadcrumb start --> */}

      {/*  <!-- breadcrumb End -->


    <!--  dashboard section start --> */}
      <br />
      <br />
      <br />
      <br />
      <Dashboard page={props.page} />

      {/* <!-- modal end -->


    <!-- footer start --> */}
      <Footer />
    </>
  );
}
