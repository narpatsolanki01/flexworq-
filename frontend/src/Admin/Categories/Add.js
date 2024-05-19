import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

function Add() {
  //initialize datatable
  $(document).ready(function () {
    $("#example").DataTable();
  });

  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-md-3 ">
            <h4 className="fw-600 fsp-22">Add Category</h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <div className="row">
                <div className="col-md-2 col-sm-12 fsp-15 fw-600">
                  Category Name
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row">
                    <input
                      data-role="tagsinput"
                      className="form-control bg-white border h-100 p-2"
                      type="text"
                      placeholder="Enter category name"
                    />
                  </div>
                  <div className="row my-3">
                    <div className="col-md-2 col-sm-4  p-0">
                      <button className="btn btn-primary fsp-13">Submit</button>
                    </div>
                    <div className="col-md-2 col-sm-2 mx-4">
                      <button className="btn btn-secondary fsp-13">
                        Cancel
                      </button>
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
