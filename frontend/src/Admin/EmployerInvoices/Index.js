import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function EmployerInvoices() {
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
            <h4 className="fw-600 fsp-22">Employer Invoices</h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <div className="card  p-4 mb-2">
              <table id="example" className="display table table-bordered border-top mt-5">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Invoice Number</th>
                    <th>Expiring Date</th>
                    <th>Employer</th>
                    <th>Amount</th>
                    <th>Stage of Payment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>6565466565</td>
                    <td>June 21, 2022</td>
                    <td>Company 1</td>
                    <td>&euro; 16.50</td>
                    <td>Lorem</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>6565466565</td>
                    <td>June 21, 2022</td>
                    <td>Company 2</td>
                    <td>&euro; 20.50</td>
                    <td>Ipsum</td>
                    <td className="text-success">Verified</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>6565466565</td>
                    <td>June 21, 2022</td>
                    <td>Company 1</td>
                    <td>&euro; 16.50</td>
                    <td>Lorem</td>
                    <td className="text-warning">Pending</td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary ">
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>6565466565</td>
                    <td>June 21, 2022</td>
                    <td>Company 2</td>
                    <td>&euro; 20.50</td>
                    <td>Ipsum</td>
                    <td className="text-success">Verified</td>
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

export default EmployerInvoices;
