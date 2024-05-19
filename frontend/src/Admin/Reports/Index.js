import React from "react";
import Card from "../Components/Card";

function Reports() {
  return (
    <>
      <div
        className="container-fluid pt-3 overflow-auto scrollbar-hidden bg-light"
        style={{ height: "100vh" }}
      >
        <div className="row mx-1">
          <div className="col-md-4">
            <h4 className="fw-600 fsp-22">Reports and Analytics</h4>
          </div>
          <div className="col-md-8 ">
            <div className="row  float-end">
              <div className="col-3">
                <select className="form-select border border-dark bg-white fsp-13">
                  <option value="" disabled selected>
                    Category
                  </option>
                  <option value="">14 Days</option>
                  <option value="">15 Days</option>
                  <option value="">16 Days</option>
                </select>
              </div>
              <div className="col-4">
                <select className="form-select border border-dark bg-white fsp-13">
                  <option value="" disabled selected>
                    Sub Category
                  </option>
                  <option value="">14 Days</option>
                  <option value="">15 Days</option>
                  <option value="">16 Days</option>
                </select>
              </div>
              <div className="col-3">
                <select className="form-select border border-dark bg-white fsp-13">
                  <option value="" disabled selected>
                    Select Time
                  </option>
                  <option value="">14 Days</option>
                  <option value="">15 Days</option>
                  <option value="">16 Days</option>
                </select>
              </div>
              <div className="col-2">
                <button className="btn btn-primary fsp-13">Apply</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <Card className="col-12 col-md-3" term="Amount of Worked Hours" value="23" cardColor="bg-success" />
          <Card className="col-12 col-md-3" term="About Shifts" value="36" cardColor="bg-primary" />
          <Card className="col-12 col-md-3" term="No Show Ratio" value="35%" cardColor="bg-secondary" />
          <Card className="col-12 col-md-3" term="Not Fulfilled Job Shifts" value="20" cardColor="bg-success" />
        </div>

        <div className="row my-2">
          <Card className="col-12 col-md-3" term="Average Hours Per Shift" value="20" cardColor="bg-secondary" />
          <Card className="col-12 col-md-3" term="Total Employees" value="142" cardColor="bg-info" />
          <Card className="col-12 col-md-3" term="Active Employees" value="98" cardColor="bg-info" />
          <Card className="col-12 col-md-3" term="Colleted VAT" value="&euro;165.50" cardColor="bg-primary" />
        </div>

        <div className="row my-2">
          <Card className="col-12 col-md-3" term="Earned Commission" value="&euro;565.50" cardColor="bg-primary" />
          <Card className="col-12 col-md-3" term="Revenue" value="&euro;1565.50" cardColor="bg-info" />
          <Card className="col-12 col-md-3" term="Freelancers" value="30" cardColor="bg-info" />
          <Card className="col-12 col-md-3" term="Freelancers" value="30" cardColor="bg-info" />
        </div>

        <div className="row my-2">
          <Card className="col-12 col-md-3" term="Active Freelancers" value="15" cardColor="bg-success" />
        </div>
      </div>
    </>
  );
}
export default Reports;
