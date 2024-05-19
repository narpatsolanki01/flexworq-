import { React } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../../../Components/Icon'
function Index(props) {

  return (
    <>
      <div className={`position-fixed h-100 w-100 bg-tr-dark-500 zindex-998 ${props.display ? '' : 'd-none'}`} onClick={props.hideSidebar}></div>
      <div className={`employer-sidebar border-top overflow-auto ${props.display ? 'active' : ''}`} style={{ height: '100vh' }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link fw-500 active py-2" onClick={props.hideSidebar} to="/employer/company_details"><Icon position="me-3">calendar3</Icon>Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="#" onClick={props.hideSidebar} ><Icon position="me-3">calendar3</Icon>Planning</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="/clients/projects" onClick={props.hideSidebar} ><Icon position="me-3">kanban</Icon>Projects</NavLink>
          </li>
          <span className='ms-4 mt-3 fsp-13'>HELP</span>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="#" onClick={props.hideSidebar} ><Icon position="me-3">book</Icon>Platform guide</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="#" onClick={props.hideSidebar} ><Icon position="me-3">question-circle</Icon>Help</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="#" onClick={props.hideSidebar} ><Icon position="me-3">chat-square-text</Icon>Give feedback</NavLink>
          </li>
          <span className='ms-4 mt-3 fsp-13'>OTHER</span>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="/dashboard/profile" onClick={props.hideSidebar} ><Icon position="me-3">person-circle</Icon>Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="#" onClick={props.hideSidebar} ><Icon position="me-3">building</Icon>Companies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="/dashboard/clients/statistics" onClick={props.hideSidebar} ><Icon position="me-3">graph-up-arrow</Icon>Statistics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="/dashboard/notification" onClick={props.hideSidebar} ><Icon position="me-3">bell</Icon>Notifications</NavLink>
          </li>
          <hr />
          <li className="nav-item">
            <NavLink className="nav-link fw-500 py-2" to="/" onClick={props.hideSidebar} >Sign out</NavLink>
          </li>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </ul>
      </div>
    </>
  )
}

export default Index