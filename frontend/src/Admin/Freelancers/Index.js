import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function Freelancers() {
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
            <h4 className="fw-600 fsp-22">Freelancers</h4>
          </div>
          <div className="col-md-9 ">
            <div className="row float-end">
              <div className="col-12">
                <button className="btn btn-primary">Add New</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <table id="example" className="display table table-bordered border-top mt-5">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Client ID</th>
                    <th>Zipcode</th>
                    <th>City</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bruce Banner</td>
                    <td>brucebanner@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>Florida</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jassie Warner</td>
                    <td>jassie@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>William Goldberg</td>
                    <td>goldberg@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>Florida</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tiger Nixon</td>
                    <td>tigernixon@gmail.com</td>
                    <td>6565466565</td>
                    <td>25478</td>
                    <td>New York</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                {/* <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
            </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freelancers;
