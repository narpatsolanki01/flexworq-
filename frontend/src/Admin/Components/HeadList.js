import React from "react";

function HeadList({ id, target, tabName  ,active}) {
  return (
    <li className="nav-item " role="presentation">
      <button
        className={`nav-link text-dark fsp-15 ${active}`}
        id={id}
        data-bs-toggle="tab"
        data-bs-target={target}
        type="button"
        role="tab"
        aria-controls=""
        aria-selected="false"
      >
        {tabName}
      </button>
    </li>
  );
}

export default HeadList;
