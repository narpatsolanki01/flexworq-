import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function Details() {
  $(document).ready(function () {
    $("#example").DataTable();
    $("#example1").DataTable();
  });
  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-md-4 ">
            <l className="fw-600 fsp-22">Employer Details</l>{" "}
            <badge className="bg-warning text-white rounded p-1 fsp-13">
              Verify on Hold
            </badge>
          </div>
          <div className="col-md-8 ">
            <div className="row float-end mx-5">
              <div className="col-8">
                <select className="form-select border border-dark bg-white fsp-18">
                  <option value="">Verify</option>
                  <option value="">UnPaid </option>
                </select>
              </div>
              <div className="col-4">
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-3 ">
            <div className="card bg-success p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    {" "}
                    <i className="bx bxl-mailchimp"></i>{" "}
                  </div>
                  <div className="ms-2 c-details">
                    <h5 className="mb-0 fsp-15 text-white">Reviews Received</h5>{" "}
                    <l className="fsp-25 p-1 text-white">205</l>
                    <badge className="mx-5 text-white">
                      <i className="bi bi-star-fill px-1 fsp-10"></i>8.4
                    </badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-info p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="icon">
                    {" "}
                    <i className="bx bxl-mailchimp"></i>{" "}
                  </div>
                  <div className="ms-2 c-details">
                    <h5 className="mb-0 fsp-15 text-white">
                      Not Matched Shifts
                    </h5>{" "}
                    <h4 className="fsp-25 p-1 text-white">36</h4>
                  </div>
                </div>
                <div className="badge"> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div className="card  p-3 mb-2">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active "
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Company Info
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Financial Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Job Shift History
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Notes"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Notes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Reviews"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Reviews Received
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ReviewsGiven"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Reviews Given
                  </button>
                </li>
              </ul>
              <div className="tab-content " id="myTabContent">
                <div
                  className="tab-pane fade show  active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Client ID</strong>
                        </div>
                        <div className="col fsp-15">5498768</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Company Name</strong>
                        </div>
                        <div className="col fsp-15">Intel Corporation</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Chamber of Commerce Number</strong>
                        </div>
                        <div className="col fsp-15">6549874</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>IBAN</strong>
                        </div>
                        <div className="col fsp-15">98745</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>VAT</strong>
                        </div>
                        <div className="col fsp-15">6598321</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Company Address</strong>
                        </div>
                        <div className="col fsp-15">
                          15, wall street, New York, USA
                        </div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Split Invoice</strong>
                        </div>
                        <div className="col fsp-15">Yes</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>First Name</strong>
                        </div>
                        <div className="col fsp-15">John</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Lst Name</strong>
                        </div>
                        <div className="col fsp-15">Smith</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Email</strong>
                        </div>
                        <div className="col fsp-15">johnsmith@gmail.com</div>
                      </div>
                      <div className="row m-3">
                        <div className="col fsp-15">
                          <strong>Phone Number</strong>
                        </div>
                        <div className="col fsp-15">+165498746</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="col">
                    <div className="card  p-4 mb-2">
                      <table
                        id="example"
                        className="display table table-bordered border-top mt-5"
                      >
                        <thead>
                          <tr>
                            <th>S. No.</th>
                            <th>Sent</th>
                            <th>Reference</th>
                            <th>Incl. VAT</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>654987641</td> <td>&euro;16.50</td>
                            <td className="text-success">Paid </td>
                            <td className="text-center d-flex">
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-download"></i>
                              </button>
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>654987641</td> <td>&euro;16.50</td>
                            <td className="text-danger">Not Paid</td>
                            <td className="text-center d-flex">
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-download"></i>
                              </button>
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>654987641</td> <td>&euro;16.50</td>
                            <td className="text-success">Paid </td>
                            <td className="text-center d-flex">
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-download"></i>
                              </button>
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-box-arrow-up-right"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>654987641</td> <td>&euro;16.50</td>
                            <td className="text-danger">Not Paid</td>
                            <td className="text-center d-flex">
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-download"></i>
                              </button>
                              <button className="btn btn-sm btn-primary mx-1">
                                <i class="bi bi-box-arrow-up-right"></i>
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
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="col">
                    <div className="card  p-4 mb-2">
                      <table
                        id="example1"
                        className="display table table-bordered border-top mt-5"
                      >
                        <thead>
                          <tr>
                            <th>S. No.</th>
                            <th>Date</th>
                            <th>Job Time</th>
                            <th>Employer</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>09.00 - 17.00</td>
                            <td>Employer 1</td>
                            <td>
                              123 Nassau St, New York, NY 10038, United States
                            </td>
                            <td>&euro;16.50</td>
                            <td className="text-danger">Cancelled </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-eye-fill"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>09.00 - 17.00</td>
                            <td>Employer 2</td>
                            <td>
                              123 Nassau St, New York, NY 10038, United States
                            </td>
                            <td>&euro;16.50</td>
                            <td className="text-success">Completed </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-eye-fill"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>09.00 - 17.00</td>
                            <td>Employer 1</td>
                            <td>
                              123 Nassau St, New York, NY 10038, United States
                            </td>
                            <td>&euro;16.50</td>
                            <td className="text-danger">Cancelled </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-eye-fill"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>June 21, 2022, 12:45 PM</td>
                            <td>09.00 - 17.00</td>
                            <td>Employer 2</td>
                            <td>
                              123 Nassau St, New York, NY 10038, United States
                            </td>
                            <td>&euro;16.50</td>
                            <td className="text-warning">Pending </td>
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
                <div
                  className="tab-pane fade show  active"
                  id="Notes"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">Notes</div>
                </div>
                <div
                  className="tab-pane fade show  active"
                  id="Reviews"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">Review Received</div>
                </div>
                <div
                  className="tab-pane fade show  active"
                  id="ReviewsGiven"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">Reviews Given</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
