import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { NavLink } from "react-router-dom";

function RoleManagement() {
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
            <h4 className="fw-600 fsp-22">Role Management</h4>
          </div>
          <div className="col-md-9 ">
            <div className="row float-end">
              <div className="col-12">
              <NavLink to="/admin/rolemanagement/add">
                <button className="btn btn-primary">Add New</button>
              </NavLink>
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
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Smith</td>
                    <td>Supervisor</td>
                    <td className="text-success">Active</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Adam Lambert</td>
                    <td>Support</td>
                    <td className="text-success">Active</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bruice Wayne</td>
                    <td>Supervisor</td>
                    <td className="text-danger">Inactive</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Mark Williams</td>
                    <td>Support</td>
                    <td className="text-success">Active</td>
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

export default RoleManagement;
