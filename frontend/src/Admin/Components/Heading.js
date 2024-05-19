import React from "react";

function Heading({bg, className, heading, term }) {
  return (
    <div className={className}>
      <l className="fw-600 fsp-22">{heading}</l>{" "}
      <badge className={`${bg} text-white rounded p-1 fsp-13`}>{term}</badge>
    </div>
  );
}

export default Heading;
