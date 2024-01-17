import React from "react";
import Sidenav from "../common/Sidenav";
import Categories from "./Categories";
import DashboardContent from "./DashboardContent";

export default function Dashboard(props) {
  console.log("page--------->", props);
  const mainpage = props.page;
  return (
    <>
      <section className="dashboard-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidenav page={props.page} />
            </div>
            <div className="col-lg-9">
              <div className="faq-content tab-content">
                {mainpage === "dashboard" && (
                  <DashboardContent page={props.page} />
                )}
                {mainpage === "categories" && <Categories page={props.page} />}
                <div className="tab-pane fade" id="orders">
                  <div className="row">
                    <div className="col-12">
                      <div className="card dashboard-table mt-0">
                        <div className="card-body">
                          <div className="top-sec">
                            <h3>orders</h3>
                            <a href="#" className="btn btn-sm btn-solid">
                              add product
                            </a>
                          </div>
                          <table className="table table-responsive-sm mb-0">
                            <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">product details</th>
                                <th scope="col">status</th>
                                <th scope="col">price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">#125021</th>
                                <td>neck velvet dress</td>
                                <td>shipped</td>
                                <td>$205</td>
                              </tr>
                              <tr>
                                <th scope="row">#521214</th>
                                <td>belted trench coat</td>
                                <td>shipped</td>
                                <td>$350</td>
                              </tr>
                              <tr>
                                <th scope="row">#521021</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>shipped</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>canceled</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#245021</th>
                                <td>woman print tee</td>
                                <td>shipped</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#122141</th>
                                <td>men print tee</td>
                                <td>canceled</td>
                                <td>$150</td>
                              </tr>
                              <tr>
                                <th scope="row">#125015</th>
                                <td>men print tee</td>
                                <td>pending</td>
                                <td>$150</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="dashboard-box">
                            <div className="dashboard-title">
                              <h4>profile</h4>
                              <span
                                data-toggle="modal"
                                data-target="#edit-profile"
                              >
                                edit
                              </span>
                            </div>
                            <div className="dashboard-detail">
                              <ul>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>company name</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Fashion Store</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>email address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>mark.enderess@mail.com</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Country / Region</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Year Established</h6>
                                    </div>
                                    <div className="right">
                                      <h6>2018</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>Total Employees</h6>
                                    </div>
                                    <div className="right">
                                      <h6>101 - 200 People</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>category</h6>
                                    </div>
                                    <div className="right">
                                      <h6>clothing</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>street address</h6>
                                    </div>
                                    <div className="right">
                                      <h6>549 Sulphur Springs Road</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>city/state</h6>
                                    </div>
                                    <div className="right">
                                      <h6>Downers Grove, IL</h6>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="details">
                                    <div className="left">
                                      <h6>zip</h6>
                                    </div>
                                    <div className="right">
                                      <h6>60515</h6>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="settings">
                  <div className="row">
                    <div className="col-12">
                      <div className="card mt-0">
                        <div className="card-body">
                          <div className="dashboard-box">
                            <div className="dashboard-title">
                              <h4>settings</h4>
                            </div>
                            <div className="dashboard-detail">
                              <div className="account-setting">
                                <h5>Notifications</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios1"
                                        value="option1"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios1"
                                      >
                                        Allow Desktop Notifications
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios2"
                                        value="option2"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios2"
                                      >
                                        Enable Notifications
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios3"
                                        value="option3"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios3"
                                      >
                                        Get notification for my own activity
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios"
                                        id="exampleRadios4"
                                        value="option4"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios4"
                                      >
                                        DND
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="account-setting">
                                <h5>deactivate account</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios4"
                                        value="option4"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios4"
                                      >
                                        I have a privacy concern
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios5"
                                        value="option5"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios5"
                                      >
                                        This is temporary
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios1"
                                        id="exampleRadios6"
                                        value="option6"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios6"
                                      >
                                        other
                                      </label>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-solid btn-xs"
                                    >
                                      Deactivate Account
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="account-setting">
                                <h5>Delete account</h5>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios7"
                                        value="option7"
                                        checked
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios7"
                                      >
                                        No longer usable
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios8"
                                        value="option8"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios8"
                                      >
                                        Want to switch on other account
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="radio_animated form-check-input"
                                        type="radio"
                                        name="exampleRadios3"
                                        id="exampleRadios9"
                                        value="option9"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="exampleRadios9"
                                      >
                                        other
                                      </label>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-solid btn-xs"
                                    >
                                      Delete Account
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  dashboard section end -->
      

    <!-- Modal start --> */}
      <div
        className="modal logout-modal fade"
        id="logout"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Logging Out
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Do you want to log out?</div>
            <div className="modal-footer">
              <a
                href="#"
                className="btn btn-dark btn-custom"
                data-dismiss="modal"
              >
                no
              </a>
              <a href="index.html" className="btn btn-solid btn-custom">
                yes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
