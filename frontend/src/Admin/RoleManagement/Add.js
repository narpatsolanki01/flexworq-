import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";

function Add() {
  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col ">
            <h4 className="fw-600 fsp-22">Add Admin Role</h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <div className="row">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  First Name
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  Last Name
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">
                  Email Address
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-3 col-sm-12 fsp-15 fw-600">Role</div>
                <div className="col-md-5 col-sm-12">
                  <div className="row">
                    <div className="col-6">
                      <div className="p-0">
                        <input
                          class=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label mx-2 fsp-15"
                          for="flexRadioDefault1"
                        >
                          Superadmin/Owner
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-0">
                        <input
                          class=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label mx-2 fsp-15"
                          for="flexRadioDefault1"
                        >
                          Manager
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="col-6">
                      <div className="p-0">
                        <input
                          class=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label mx-2 fsp-15"
                          for="flexRadioDefault1"
                        >
                          Support
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-0">
                        <input
                          class=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label mx-2 fsp-15"
                          for="flexRadioDefault1"
                        >
                          Finance
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
