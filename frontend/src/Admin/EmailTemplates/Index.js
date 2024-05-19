import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { NavLink } from "react-router-dom";

function EmailTemplates() {
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
            <h4 className="fw-600 fsp-22">Email Templates</h4>
          </div>
          <div className="col-md-9 ">
            <div className="row float-end">
              <div className="col-12">
                <NavLink to="/admin/emailtemplates/add">
                  <button className="btn btn-primary">Add New</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <table
                id="example"
                className="display table table-bordered border-top mt-5"
              >
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Template Type</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Freelancer Notification</td>
                    <td>Welcome Email</td>
                    <td>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iste eaque ...
                    </td>
                    <td className="text-center d-flex">
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Employer Notification</td>
                    <td>Welcome Email</td>
                    <td>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iste eaque ...
                    </td>
                    <td className="text-center d-flex">
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Freelancer Notification</td>
                    <td>Checkout Notification</td>
                    <td>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iste eaque ...
                    </td>
                    <td className="text-center d-flex">
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Employer Notification</td>
                    <td>New Job Alert</td>
                    <td>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iste eaque ...
                    </td>
                    <td className="text-center d-flex">
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button className="btn btn-sm btn-primary mx-1">
                        <i className="bi bi-trash-fill"></i>
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

export default EmailTemplates;
