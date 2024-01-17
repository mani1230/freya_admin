import React from "react";

export default function DashboardContent() {
  return (
    <>
      <div className="tab-pane fade show active" id="dashboard">
        <div className="counter-section">
          <div className="row">
            <div className="col-md-4">
              <div className="counter-box">
                <img
                  src="../assets/images/icon/dashboard/order.png"
                  className="img-fluid"
                />
                <div>
                  <h3>25</h3>
                  <h5>total users</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="counter-box">
                <img
                  src="../assets/images/icon/dashboard/sale.png"
                  className="img-fluid"
                />
                <div>
                  <h3>12500</h3>
                  <h5>total appointments</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="counter-box">
                <img
                  src="../assets/images/icon/dashboard/homework.png"
                  className="img-fluid"
                />
                <div>
                  <h3>50</h3>
                  <h5>appointments pending</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <div id="chart"></div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <div id="chart-order"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card dashboard-table">
              <div className="card-body">
                <h3>trending products</h3>
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">image</th>
                      <th scope="col">product name</th>
                      <th scope="col">price</th>
                      <th scope="col">sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/dashboard/product/1.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>neck velvet dress</td>
                      <td>$205</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/dashboard/product/9.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>belted trench coat</td>
                      <td>$350</td>
                      <td>800</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/pro3/34.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>man print tee</td>
                      <td>$150</td>
                      <td>750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card dashboard-table">
              <div className="card-body">
                <h3>recent orders</h3>
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">order id</th>
                      <th scope="col">product details</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#21515</th>
                      <td>neck velvet dress</td>
                      <td>confrimed</td>
                    </tr>
                    <tr>
                      <th scope="row">#78153</th>
                      <td>belted trench coat</td>
                      <td>shipped</td>
                    </tr>
                    <tr>
                      <th scope="row">#51512</th>
                      <td>man print tee</td>
                      <td>pending</td>
                    </tr>
                    <tr>
                      <th scope="row">#78153</th>
                      <td>belted trench coat</td>
                      <td>shipped</td>
                    </tr>
                    <tr>
                      <th scope="row">#51512</th>
                      <td>man print tee</td>
                      <td>pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
