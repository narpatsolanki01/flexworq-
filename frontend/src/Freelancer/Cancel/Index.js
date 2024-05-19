import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../Components/Icon";

function Index() {
  const [cancelled, setCancelled] = useState(false);
  return (
    <>
      <section className="mt-0 py-5">
        <div className="container px-3">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="border-bottom">
                <span className="text-success-dark">
                  29 Jun · 09:00 - 17:00
                </span>
                {cancelled ? (
                  <button className="btn btn-danger py-0 float-end">
                    You Cancelled
                  </button>
                ) : (
                  <button className="btn btn-primary py-0 float-end">
                    Hired
                  </button>
                )}
                <h3 className="fsp-22">
                  Klantenservice medewerker met ervaring
                </h3>
                <p className="fsp-18 fw-bold my-4">
                  €17.50{" "}
                  <span className="fsp-12 text-secondary">· Customer Care</span>
                </p>
              </div>
              <div className="row py-3 border-bottom">
                <div className="col-12 col-md-3">
                  <img
                    src="/assets/images/jobs/Group_389.png"
                    className="w-75"
                    alt="..."
                  />
                </div>
                <div className="col-12 col-md-9 px-0">
                  <h4 className="fsp-15">Marqetize</h4>
                  <p className="fsp-13 mb-0">
                    Marqetize is een marketing organisatie dat variërende
                    projecten uitvoert voor opdrachtgevers. Van toffe online
                    marketing projecten tot onde…
                  </p>
                  <Link to="/">View more info.</Link>
                </div>
              </div>
              <div className="py-4">
                <h4 className="fsp-13 fw-bold">Appearance and outfit</h4>
                <button className="btn btn-outline-dark py-2_5 me-2">
                  Clothing of own choosing
                </button>
                <button className="btn btn-outline-dark py-2_5 ms-0 mx-md-2">
                  Neat trousers
                </button>
                <button className="btn btn-outline-dark py-2_5 ms-0 mt-2 mt-md-0 mx-md-2">
                  Trimmed beard
                </button>
              </div>
              <div className="py-2">
                <h4 className="fsp-13 fw-bold">Briefing</h4>
                <p className="fsp-13">
                  Als Klantenservicemedewerker neem je de telefoon op en help en
                  begeleid je de klant of potentiële klant met zijn vraag. Het
                  is de bedoeling dat je de klant doorschakelt of een een
                  afspraak inplant met de juiste collega van sales of techniek.
                </p>
              </div>
              <div className="py-2">
                <h4 className="fsp-13 fw-bold">Skills</h4>
                <button className="btn btn-outline-dark py-2_5 me-2 mb-2">
                  Quick service
                </button>
                <button className="btn btn-outline-dark py-2_5 mx-md-2 mb-2 ms-0">
                  Stress resistant
                </button>
                <button className="btn btn-outline-dark py-2_5 mx-md-2 ms-0 mb-2">
                  Social hygiene
                </button>
                <button className="btn btn-outline-dark py-2_5 mx-md-2 mb-2 ms-0">
                  Reduce sauces
                </button>
                <button className="btn btn-outline-dark py-2_5 me-2">
                  Operating kitchen appliances
                </button>
                <button className="btn btn-outline-dark py-2_5 mx-md-2 ms-0 mt-2 mt-md-0">
                  Portionering
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img
                src="/assets/images/maps/map.png"
                className="w-100 mt-2"
                alt="..."
              />
              <div className="row border-bottom my-2">
                <div className="col-2 mx-0 pe-0">
                  <img
                    src="/assets/images/icons/map-pin.svg"
                    className="w-50 mt-2"
                    alt="..."
                  />
                </div>
                <div className="col-8 mx-0 px-0">
                  <span className="text-primary">Boompjes 40</span>
                  <p className="text-secondary">3011XB Rotterdam</p>
                </div>
                <div className="col-1 pt-3">
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <span className="text-success-dark">Contact Person on Site</span>
              <div className="row border-bottom my-2">
                <div className="col-2 mx-0 pe-0">
                  <img
                    src="/assets/images/icons/map-pin.svg"
                    className="w-50 mt-2"
                    alt="..."
                  />
                </div>
                <div className="col-8 mx-0 px-0">
                  <span className="fw-600">John Wick</span>
                  <p className="text-secondary">065468797</p>
                </div>
                <div className="col-1 pt-3">
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <div className="row border-bottom my-2">
                <div className="col-2 mx-0 pe-0">
                  <img
                    src="/assets/images/icons/document.svg"
                    className="w-20 mt-3"
                    alt="..."
                  />
                </div>
                <div className="col-8 mx-0 px-0 py-3">
                  <p>Open assignment agreement</p>
                </div>
                <div className="col-1 pt-3">
                  <Icon>chevron-right</Icon>
                </div>
              </div>
              <span className="text-success-dark">
                Not able to run this shift?
              </span>
              <p className="my-2 mb-3">
                Cancelling is possible until 24 hours before the start of the
                shift. You'r in time.
              </p>
              <button
                className={`btn btn-outline-danger d-block mb-4 rounded-1 py-2_5 ${
                  cancelled ? "d-none" : ""
                }`}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Cancel my shift
              </button>
              <Link
                to="/"
                className="text-primary w-100 px-2 px-md-4 py-2_5 rounded"
                style={{ background: "#E8F1FD" }}
              >
                File an insurance claim{" "}
                <Icon position="ms-3 ms-ms-5">chevron-right</Icon>
              </Link>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body text-center py-4">
                <div className="d-flex">
                  <p className="fsp-13 fw-bold mb-3">
                    Are you sure you want to cancle this shift?
                  </p>
                  <i
                    className="bi bi-x fsp-22"
                    style={{ marginTop: "-10px" }}
                  ></i>
                </div>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-outline-primary mx-1 border-0"
                >
                  Don't cancel shift
                </button>
                <Link
                  onClick={() => setCancelled(true)}
                  to="/freelancer/did-you-work"
                  data-bs-dismiss="modal"
                  className="btn btn-primary mx-1 px-2"
                >
                  Cancel shift
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
