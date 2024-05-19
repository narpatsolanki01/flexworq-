import React from "react";
import Icon from "../../../Components/Icon";
import { NavLink } from 'react-router-dom'
function Index() {
  return (
    <>
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading bg-light ffq fsp-27 ps-4">Flexworq</div>
        <span className="px-4 pt-2 text-secondary">MAIN NAVIGATION</span>
        <div className="list-group list-group-flush mt-2">
          <NavLink to="/admin" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">speedometer2</Icon> Dashboard</NavLink>
          <NavLink to="/admin/freelancers" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">person-circle</Icon> Freelancers</NavLink>
          <NavLink to="/admin/jobs" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">people-fill</Icon> Job List</NavLink>
          <NavLink to="/admin/employers" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">people-fill</Icon> Employers</NavLink>
          <NavLink to="/admin/employerinvoices" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">grid-fill</Icon> Employer Invoices</NavLink>
          <NavLink to="/admin/freelancerpayout" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">bell-fill</Icon> Freelancer Payout</NavLink>
          <NavLink to="/admin/emailtemplates" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon> Email Templates</NavLink>
          <NavLink to="/admin/emaillogs" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon> Email Logs</NavLink>
          <NavLink to="/admin/rolemanagement" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon> Role Management</NavLink>
          <NavLink to="/admin/activitylog" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon> Activity Logs</NavLink>
          <NavLink to="/admin/categories" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon> Categories</NavLink>
          <NavLink to="/admin/subcategories" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon>Sub Categories</NavLink>
          <NavLink to="/admin/reports" className="list-group-item list-group-item-action border-0 p-3"><Icon position="me-2">file-text-fill</Icon>Reports and Analytics</NavLink>
        </div>
      </div>
    </>
  );
}

export default Index;
