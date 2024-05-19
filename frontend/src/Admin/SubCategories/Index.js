import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function SubCategories() {
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
            <h4 className="fw-600 fsp-22">Sub Categories</h4>
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
                    <th>Sub Category Name</th>
                    <th>Main Category Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Consectetur Adipiscing elit</td>
                    <td>Lorem ipsum dolor sit amet</td>
                    <td className="text-center d-flex">
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
                    <td>Consectetur Adipiscing elit</td>
                    <td>Lorem ipsum dolor sit amet</td>
                    <td className="text-center d-flex">
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
                    <td>Consectetur Adipiscing elit</td>
                    <td>Lorem ipsum dolor sit amet</td>
                    <td className="text-center d-flex">
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
                    <td>Consectetur Adipiscing elit</td>
                    <td>Lorem ipsum dolor sit amet</td>
                    <td className="text-center d-flex">
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

export default SubCategories;
