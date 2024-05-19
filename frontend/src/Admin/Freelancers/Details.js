import React from "react";
import Card from "../Components/Card";
import Heading from "../Components/Heading";
import HeadList from "../Components/HeadList";
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
    $("#example2").DataTable();
  });
  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <Heading
            className="col-md-7"
            heading="Freelancer Details"
            bg="bg-success"
            term="Verify"
          />
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-md-2 ">Status</div>
              <div className="col-md-3">
                <select className="form-select border border-dark bg-white fsp-18">
                  <option value="">Verify</option>
                  <option value="">Pending </option>
                </select>
              </div>
              <div className="col-md-3 p-0">
                <button className="btn btn-primary">Submit</button>
              </div>
              <div className="col-md-1  border-start  border-dark"></div>
              <div className="col-md-3 p-0">
                <button className="btn btn-primary">Add&nbsp;New</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <Card className="col-12 col-md-3" term="Show up Ratio" value="98%" />
          <Card className="col-12 col-md-3" term="Punctual At Time" value="98%"
          />
          <Card className="col-12 col-md-3" term="Reviews Received" value="205"
            badge={
              <badge className="mx-5 text-white">
                <i className="bi bi-star-fill px-1 fsp-10"></i>8.4
              </badge>
            }
          />
          <Card className="col-12 col-md-3" term="Given Reviews to Employees" value="145%"
          />
          <Card className="col-12 col-md-3" term="Accomplished Jobshifts" value="24"
          />
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div className="bg-light  p-3 mb-2">
              <ul
                className="nav  text-bg-secondary rounded-top nav-tabs"
                id="myTab"
                role="tablist"
              >
                <HeadList id="home-tab" target="#home" tabName="Profile Details" active="active"
                />
                <HeadList id="profile-tab" target="#profile" tabName="Finance" active=""
                />
                <HeadList id="contact-tab" target="#contact" tabName="Job Details" active=""
                />
                <HeadList id="payout" target="#Payout" tabName="Invoice/Payouts" active=""
                />
                <HeadList id="note-tab" target="#Notes" tabName="Notes" active=""
                />
                <HeadList id="rr-tab" target="#Reviews" tabName="Reviews Received" active=""
                />
                <HeadList id="rg-tab" target="#ReviewsGiven" tabName="Reviews Given" active=""
                />
              </ul>
              <div className="tab-content " id="myTabContent">
                <div id="home" className="tab-pane  fade show   active">
                  <div
                    className="tab-pane  fade show card  active"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row ">
                      <div className="col-12">
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Name</strong>
                          </div>
                          <div className="col-9 fsp-15">: John Smith</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Birthday</strong>
                          </div>
                          <div className="col-9 fsp-15">: June 8, 1988</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Phone Number</strong>
                          </div>
                          <div className="col-9 fsp-15">: +165498768</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Email Address</strong>
                          </div>
                          <div className="col-9 fsp-15">: johnsmith@gmail</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Overall Rating</strong>
                          </div>
                          <div className="col-9 fsp-15">: 8.4</div>
                        </div>
                        <div className="row m-3">
                          <div className="col fsp-15 my-2">
                            <h5 className="text-success">Split Invoice</h5>
                          </div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Street Number</strong>
                          </div>
                          <div className="col-9 fsp-15">: 24 Lorem street</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>City</strong>
                          </div>
                          <div className="col-9 fsp-15">: New York</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Country</strong>
                          </div>
                          <div className="col-9 fsp-15">: USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane mt-3  fade show card  active"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row  mt-3">
                      <div className="col-12">
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Citizen Service Number</strong>
                          </div>
                          <div className="col-9 fsp-15">: 685987638</div>
                        </div>
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Expiration Date</strong>
                          </div>
                          <div className="col-9 fsp-15">: June 12, 2023</div>
                        </div>
                        <hr />
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Uploaded Documnets</strong>
                          </div>
                          <div className="col-9 fsp-15">
                            : <input type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane mt-3 fade show card  active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row  mt-3">
                      <div className="col-12">
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Passport/ID document no.</strong>
                          </div>
                          <div className="col-9 fsp-15">: 321685987638</div>
                        </div>
                        <hr />
                        <div className="row m-3">
                          <div className="col-3 fsp-15">
                            <strong>Uploaded Passport/ID</strong>
                          </div>
                          <div className="col-9 fsp-15">
                            : <input type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane card fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row ">
                    <div className="col-12">
                      <div className="row m-3">
                        <div className="col-3 fsp-15">
                          <strong>IBAN Number</strong>
                        </div>
                        <div className="col-9 fsp-15">: 231354874</div>
                      </div>
                      <div className="row m-3">
                        <div className="col-3 fsp-15">
                          <strong>VAT Identification Number</strong>
                        </div>
                        <div className="col-9 fsp-15">: 685987638</div>
                      </div>
                      <div className="row m-3">
                        <div className="col-3 fsp-15">
                          <strong>VAR</strong>
                        </div>
                        <div className="col-9 fsp-15">: Enable</div>
                      </div>
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
                  className="tab-pane fade"
                  id="Payout"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="col">
                    <div className="card  p-4 mb-2">
                      <table
                        id="example2"
                        className="display table table-bordered border-top mt-5"
                      >
                        <thead>
                          <tr>
                            <th>S. No.</th>
                            <th>Factuurdatum </th>
                            <th>Reference </th>
                            <th>Excl. VAT</th>
                            <th>Incl. VAT</th>
                            <th>Betaalstatus</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>June 21, 2022</td>
                            <td>g2060327</td>
                            <td>&euro;16.50</td>
                            <td>&euro;16.50</td>
                            <td>
                              You have not chosen factoring, and will receive
                              the payment as soon as the client fulfils the
                              invoice citing g2060327.{" "}
                            </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-download"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>June 21, 2022</td>
                            <td>g2060327</td>
                            <td>&euro;16.50</td>
                            <td>&euro;16.50</td>
                            <td>
                              You have not chosen factoring, and will receive
                              the payment as soon as the client fulfils the
                              invoice citing g2060327.{" "}
                            </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-download"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>June 21, 2022</td>
                            <td>g2060327</td>
                            <td>&euro;16.50</td>
                            <td>&euro;16.50</td>
                            <td>
                              You have not chosen factoring, and will receive
                              the payment as soon as the client fulfils the
                              invoice citing g2060327.{" "}
                            </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-download"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>June 21, 2022</td>
                            <td>g2060327</td>
                            <td>&euro;16.50</td>
                            <td>&euro;16.50</td>
                            <td>
                              You have not chosen factoring, and will receive
                              the payment as soon as the client fulfils the
                              invoice citing g2060327.{" "}
                            </td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary ">
                                <i className="bi bi-download"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Details;
