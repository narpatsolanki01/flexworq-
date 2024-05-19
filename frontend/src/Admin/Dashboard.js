import React from "react";
import Heading from "./Components/Heading";
import Card from "./Components/Card";

function Dashboard() {
  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <Heading className="col-md-3" heading="Dashboard" />
          <div className="col-md-9 ">
            <div className="row float-end mx-5">
              <div className="col-8">
                <select className="form-select border border-dark bg-white fsp-18">
                  <option value="">14 Days</option>
                  <option value="">15 Days</option>
                  <option value="">16 Days</option>
                </select>
              </div>
              <div className="col-4">
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
        <Card className="col-12 col-md-3" term="Worked Hours" value="23" cardColor="bg-success"/>
        <Card className="col-12 col-md-3" term="Not Matched Shifts" value="36" cardColor="bg-primary"/>
        <Card className="col-12 col-md-3" term="Period of Time" value="45" cardColor="bg-secondary"/>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="card  p-3 mb-2">
              <div className="d-flex justify-content-between">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-success">
                        New Employees
                      </th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Smith</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">New</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Bruce Wayne</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-warning">
                          Waiting For Verification
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jessica Alba</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-success">Verified</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Adam Grant</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-success">Verified</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Berry Allen</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">New</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card  p-3 mb-2">
              <div className="d-flex justify-content-between">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-success">
                        New Freelancers
                      </th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Smith</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">New</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Bruce Wayne</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-warning">
                          Waiting For Verification
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jessica Alba</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-success">Verified</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Adam Grant</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-success">Verified</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Berry Allen</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">New</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ">
            <div className="card  p-3 mb-2">
              <div className="d-flex justify-content-between">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-success">
                        New Created Active Jobs
                      </th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Job 1</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">Matched</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Job 1</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-danger">Not Matched</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Job 1</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-success">
                          Accomplished
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Job 1</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-primary">Matched</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Job 1</td>
                      <td></td>
                      <td className="float-end">
                        <button className="btn btn-danger">Not Matched</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
