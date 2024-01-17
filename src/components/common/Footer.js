import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-light">
        <div className="light-layout"></div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    {/* <img src="../assets/images/icon/logo.png" alt="" /> */}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">mens</a>
                      </li>
                      <li>
                        <a href="#">womens</a>
                      </li>
                      <li>
                        <a href="#">clothing</a>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">featured</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>why we choose</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping & return</a>
                      </li>
                      <li>
                        <a href="#">secure shopping</a>
                      </li>
                      <li>
                        <a href="#">gallary</a>
                      </li>
                      <li>
                        <a href="#">affiliates</a>
                      </li>
                      <li>
                        <a href="#">contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>store information</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <i className="fa fa-map-marker"></i>Multikart Demo Store,
                        Demo store India 345-659
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>Call Us: 123-456-7898
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>Email Us:
                        Support@Fiot.com
                      </li>
                      <li>
                        <i className="fa fa-fax"></i>Fax: 123456
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </footer>
      {/* <!-- footer end -->


    <!-- tap to top --> */}
      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      {/* <!-- tap to top End -->


    <!-- theme setting --> */}
      <a href="javascript:void(0)" onclick="openSetting()">
        <div className="setting-sidebar" id="setting-icon">
          <div>
            <i className="fa fa-cog" aria-hidden="true"></i>
          </div>
        </div>
      </a>
      <div id="setting_box" className="setting-box">
        <a
          href="javascript:void(0)"
          className="overlay"
          onclick="closeSetting()"
        ></a>
        <div className="setting_box_body">
          <div onclick="closeSetting()">
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </div>
          <div className="setting-body">
            <div className="setting-title">
              <h4>layout</h4>
            </div>
            <div className="setting-contant">
              <div className="row demo-section">
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo1"></div>
                    <div className="demo-text">
                      <h4>Fashion</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('index.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo43">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>game</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('game.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo44">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>gym</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('gym-product.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo45">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>tools</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('tools.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo46">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>marijuana</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('marijuana.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo47">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>metro</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('metro.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo48">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>pets</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('pets.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo49">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>video slider</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('video-slider.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo50">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>left menu</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('left_sidebar-demo.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo51">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>jewellery</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('jewellery.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo2"></div>
                    <div className="demo-text">
                      <h4>Fashion</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('fashion-2.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo3"></div>
                    <div className="demo-text">
                      <h4>Fashion</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('fashion-3.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo4"></div>
                    <div className="demo-text">
                      <h4>Shoes</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('shoes.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo5"></div>
                    <div className="demo-text">
                      <h4>Bags</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('bags.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo6"></div>
                    <div className="demo-text">
                      <h4>Watch</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('watch.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo7"></div>
                    <div className="demo-text">
                      <h4>Kids</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('kids.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo8"></div>
                    <div className="demo-text">
                      <h4>Flower</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('flower.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo9"></div>
                    <div className="demo-text">
                      <h4>Nursery</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('nursery.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo10"></div>
                    <div className="demo-text">
                      <h4>Vegetables</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('vegetables.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo11"></div>
                    <div className="demo-text">
                      <h4>Beauty</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('beauty.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo12"></div>
                    <div className="demo-text">
                      <h4>Instagram Shop</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('instagram-shop.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects effect-2">
                  <div className="set-position">
                    <div className="layout-container demo13"></div>
                    <div className="demo-text">
                      <h4>Lookbook</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('lookbook-demo.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo14"></div>
                    <div className="demo-text">
                      <h4>Light</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('light.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo15"></div>
                    <div className="demo-text">
                      <h4>Full Page</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('full-page.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo16"></div>
                    <div className="demo-text">
                      <h4>Electronic-1</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('electronic-1.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo17"></div>
                    <div className="demo-text">
                      <h4>Electronic-2</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('electronic-2.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects effect-2">
                  <div className="set-position">
                    <div className="layout-container demo18"></div>
                    <div className="demo-text">
                      <h4>Video</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('video.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo19"></div>
                    <div className="demo-text">
                      <h4>Goggles</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('goggles.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects mb-0">
                  <div className="set-position">
                    <div className="layout-container demo20"></div>
                    <div className="demo-text">
                      <h4>Parallax</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('parallax.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects mb-0">
                  <div className="set-position">
                    <div className="layout-container demo21"></div>
                    <div className="demo-text">
                      <h4>Furniture</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('furniture.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h4>shop</h4>
            </div>
            <div className="setting-contant">
              <div className="row demo-section">
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo22"></div>
                    <div className="demo-text">
                      <h4>left sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo24"></div>
                    <div className="demo-text">
                      <h4>right sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(right).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo23"></div>
                    <div className="demo-text">
                      <h4>no sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(no-sidebar).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo25"></div>
                    <div className="demo-text">
                      <h4>popup</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(sidebar-popup).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo52">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>metro</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(metro).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo53">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>full width</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(full-width).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo26"></div>
                    <div className="demo-text">
                      <h4>infinite scroll</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(infinite-scroll).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo54"></div>
                    <div className="demo-text">
                      <h4>three grid</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(3-grid).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects mb-0">
                  <div className="set-position">
                    <div className="layout-container demo55"></div>
                    <div className="demo-text">
                      <h4>six grid</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(6-grid).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects mb-0">
                  <div className="set-position">
                    <div className="layout-container demo56"></div>
                    <div className="demo-text">
                      <h4>list view</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('category-page(list-view).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h4>product</h4>
            </div>
            <div className="setting-contant">
              <div className="row demo-section">
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo40">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>four image </h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(4-image).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo33"></div>
                    <div className="demo-text">
                      <h4>left sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page.html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo36"></div>
                    <div className="demo-text">
                      <h4>right sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(right-sidebar).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo34"></div>
                    <div className="demo-text">
                      <h4>no sidebar</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(no-sidebar).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo41">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>bundle</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(bundle).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo42">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>image swatch</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(image-swatch).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo32"></div>
                    <div className="demo-text">
                      <h4>left image</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(left-image).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo35"></div>
                    <div className="demo-text">
                      <h4>right image</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(right-image).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo31">
                      <div className="ribbon-1">
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                      </div>
                    </div>
                    <div className="demo-text">
                      <h4>image outside</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(image-outside).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo27"></div>
                    <div className="demo-text">
                      <h4>3-col left</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(3-col-left).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo28"></div>
                    <div className="demo-text">
                      <h4>3-col right</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(3-col-right).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo29"></div>
                    <div className="demo-text">
                      <h4>3-col bottom</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(3-column).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo37"></div>
                    <div className="demo-text">
                      <h4>sticky</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(sticky).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects">
                  <div className="set-position">
                    <div className="layout-container demo30"></div>
                    <div className="demo-text">
                      <h4>accordian</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(accordian).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 text-center demo-effects mb-0">
                  <div className="set-position">
                    <div className="layout-container demo38"></div>
                    <div className="demo-text">
                      <h4>vertical tab</h4>
                      <div
                        className="btn-group demo-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        {" "}
                        <button
                          type="button"
                          onClick="window.open('product-page(vertical-tab).html')"
                          className="btn new-tab-btn"
                        >
                          Preview
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h4>color picker</h4>
            </div>
            <div className="setting-contant">
              <ul className="color-box">
                <li>
                  <input
                    id="ColorPicker1"
                    type="color"
                    value="#ff4c3b"
                    name="Background"
                  />
                  <span>theme deafult color</span>
                </li>
              </ul>
            </div>
            <div className="setting-title">
              <h4>RTL</h4>
            </div>
            <div className="setting-contant">
              <ul className="setting_buttons">
                <li className="active" id="ltr_btn">
                  <a href="javascript:void(0)" className="btn setting_btn">
                    LTR
                  </a>
                </li>
                <li id="rtl_btn">
                  <a href="javascript:void(0)" className="btn setting_btn">
                    RTL
                  </a>
                </li>
              </ul>
            </div>
            <div className="buy_btn">
              <a
                href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967?s_rank=1"
                target="_blank"
                className="btn btn-block purchase_btn"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                purchase Multikart now!
              </a>
              <a
                href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
                target="_blank"
                className="btn btn-block purchase_btn"
              >
                <img
                  src="../assets/images/icon/angular.png"
                  alt=""
                  className="img-fluid"
                />{" "}
                Multikart Angular
              </a>
              <a
                href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=2"
                target="_blank"
                className="btn btn-block purchase_btn"
              >
                <img
                  src="../assets/images/icon/react.png"
                  alt=""
                  className="img-fluid"
                />{" "}
                Multikart React
              </a>
              <a
                href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
                target="_blank"
                className="btn btn-block purchase_btn"
              >
                <img
                  src="../assets/images/icon/shopify.png"
                  alt=""
                  className="img-fluid"
                />{" "}
                Multikart Shopify
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
