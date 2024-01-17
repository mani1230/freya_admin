import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Categories(props) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      {/* Modals */}

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add new category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="exampleInputEmail1">Category Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Category"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="file" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">
              File type jpg,png,jpeg max:100 mb
            </small>
          </div>

          <button type="submit" class="btn btn-primary float-rigth">
            Submit
          </button>
        </Modal.Body>
      </Modal>
      {/* End */}

      <div
        className={
          props.page === "categories"
            ? "tab-pane fade show active"
            : "tab-pane fade"
        }
        id="products"
      >
        <div className="row">
          <div className="col-12">
            <div className="card dashboard-table mt-0">
              <div className="card-body">
                <div className="top-sec">
                  <h3>All Categories</h3>
                  <a
                    href="#"
                    className="btn btn-sm btn-solid"
                    onClick={() => setLgShow(true)}
                  >
                    add product
                  </a>
                </div>
                <table className="table-responsive-md table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Sales</th>
                      <th scope="col">Action</th>
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
                      <td>women clothes</td>
                      <td>1000</td>
                      <td>2000</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/dashboard/product/9.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>belted trench coat</td>
                      <td>women clothes</td>

                      <td>800</td>
                      <td>350</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/pro3/34.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>men print tee</td>
                      <td>men clothes</td>

                      <td>750</td>
                      <td>150</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/pro3/1.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>woman print tee</td>
                      <td>women clothes</td>

                      <td>750</td>
                      <td>150</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/pro3/27.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>men print tee</td>
                      <td>men clothes</td>

                      <td>750</td>
                      <td>150</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img
                          src="../assets/images/pro3/36.jpg"
                          className="blur-up lazyloaded"
                        />
                      </th>
                      <td>men print tee</td>
                      <td>men clothes</td>

                      <td>750</td>
                      <td>150</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o mr-1"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa fa-trash-o ml-1"
                          aria-hidden="true"
                        ></i>
                      </td>
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
