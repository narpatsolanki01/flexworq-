import React from "react";

function Card({ className, term, value, badge, cardColor = "bg-success" }) {
  return (
    <div className={className}>
      <div className={`card ${cardColor} p-3 mb-2`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp"></i>{" "}
            </div>
            <div className="ms-2 c-details">
              <h5 className="mb-0 fsp-15 text-white">{term}</h5>{" "}
              <l className="fsp-25 p-1 text-white">{value}</l>
              {badge}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
