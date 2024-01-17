import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidenav(props) {
  const navigate = useNavigate();
  const handlenavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="dashboard-sidebar">
        <div className="profile-top">
          <div className="profile-image">
            <img
              src="../assets/images/icon/logo.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="profile-detail">
            <h5>Freya</h5>
            <h6>Super Admin | Username</h6>
            {/* <h6>mark.enderess@mail.com</h6> */}
          </div>
        </div>
        <div className="faq-tab">
          <ul className="nav nav-tabs" id="top-tab" role="tablist">
            <li className="nav-item">
              <a
                data-toggle="tab"
                className={
                  props.page === "dashboard" ? "nav-link active" : "nav-link"
                }
                href="#dashboard"
                onClick={() => handlenavigate("/")}
              >
                dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                data-toggle="tab"
                className={
                  props.page === "categories" ? "nav-link active" : "nav-link"
                }
                href="#products"
                onClick={() => handlenavigate("/categories")}
              >
                Category
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="tab" className="nav-link" href="#orders">
                Admins
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="tab" className="nav-link" href="#profile">
                profile
              </a>
            </li>
            <li className="nav-item">
              <a data-toggle="tab" className="nav-link" href="#settings">
                settings
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#logout"
                href="#"
              >
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
