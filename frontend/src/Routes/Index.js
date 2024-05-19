import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
// Layouts
import FrontendLayouts from "../Public/Layouts/Main";
import EmployerLayouts from "../Employer/Layouts/Index";
import FreelancerLayout from "../Freelancer/Layouts/Index";
import AdminLayouts from "../Admin/Layouts/Index";
// public
import Home from "../Public/Index";
import ForEmployers from "../Public/ForEmployers";
import Ourstory from "../Public/Ourstory";
import Contact from "../Public/Contact";
import Privacypolicy from "../Public/Privacypolicy";
import TermsOfUse from "../Public/TermsOfUse";
import Error from "../Pages/Errors/Index";
// Employer
import CompanyLogin from "../Employer/Auth/Loin";
import CompanyRegister from "../Employer/Auth/Register";
import EmployerProfile from "../Employer/Profile/Index";
import Statistics from "../Employer/Company/Statistics";
import Projects from "../Employer/Project/Index";
import ProjectDetails from "../Employer/Project/Details";
import Add from "../Employer/Project/Jobs/Add";
import AddShift from "../Employer/Project/Shift/Add";
import ClientJobDetail from "../Employer/Project/Jobs/Details";
import Step2 from "../Employer/Profile/Profile_complete_steps/Step2";
import Step3 from "../Employer/Profile/Profile_complete_steps/Step3";
import Step1 from "../Employer/Profile/Profile_complete_steps/Step1";
import PendingCheckout from "../Employer/Checkouts/Pending";
import OverviewEmployer from "../Employer/Financial/Overview";
import Company from '../Employer/Company/Index';
import Checkout from "../Employer/Checkouts/Index";
// Freelancer
import FreeflexerLogin from "../Freelancer/Auth/Login";
import FreeflexerRegister from "../Freelancer/Auth/Register";
import LoginWithoutPassword from "../Freelancer/Auth/LoginWithoutPassword";
import Reset from "../Freelancer/Auth/Password/Reset";
import JobsList from "../Public/jobs/Index";
import Details from "../Public/jobs/Details";
// freelancer
import Dashboard from '../Freelancer/Dashboard/Index';
// import OldDashboard from '../Freelancer/Dashboard';
import ProfileComplete from "../Freelancer/Profile/ProfileComplete";
import FreelancerProfile from "../Freelancer/Profile/Index";
import Notification from "../Freelancer/Notification";
import Flexpools from "../Freelancer/Flexpools/Index";
import FlexpoolsDetails from "../Freelancer/Flexpools/Details";
import OverviewFreelancer from "../Freelancer/Financial/Overview";
import Complete from '../Freelancer/Checkout/Complete'
import Negotiate from '../Freelancer/jobs/Negotiate'
import CheckoutStep1 from '../Freelancer/Checkout/Step1'
import CheckoutStep2 from '../Freelancer/Checkout/Step2'
import CheckoutStep3 from '../Freelancer/Checkout/Step3'
import CancleJob from '../Freelancer/Cancel/Index';
import Substitute1 from "../Freelancer/Replacement/Substitute1";
import Substitute2 from "../Freelancer/Replacement/Substitute2";
import Apply from "../Freelancer/jobs/Apply";
import DidYourWork from "../Freelancer/Checkout/DidYourWork";
import Applied from "../Freelancer/jobs/Applied";

//  Admin Routes
import AdminDashboard from "../Admin/Dashboard";
import Freelancers from "../Admin/Freelancers/Index";
import Employers from "../Admin/Employers/Index";
import EmployerInvoices from "../Admin/EmployerInvoices/Index";
import FreelancerPayout from "../Admin/FreelancerPayout/Index";
import Jobs from "../Admin/Jobs/Index";
import EmailLogs from "../Admin/EmailLogs/Index";
import EmailTemplates from "../Admin/EmailTemplates/Index";
import Categories from "../Admin/Categories/Index";
import SubCategories from "../Admin/SubCategories/Index";
import RoleManagement from "../Admin/RoleManagement/Index";
import AddRoleManagement from "../Admin/RoleManagement/Add";
import ActivityLog from "../Admin/ActivityLog/Index";
import AddCategories from "../Admin/Categories/Add";
import AddEmailTemplate from "../Admin/EmailTemplates/Add";
import Reports from "../Admin/Reports/Index";
import EmployerDetails from "../Admin/Employers/Details";
import FreelancerDetails from "../Admin/Freelancers/Details";

// End Of Admin Routes
import ProtectedFreelancer from './ProtectedFreelancer';


// freelancer routes

const FreelancerRoutes = [
  { path: "dashboard", component: Dashboard },
  { path: "profile-complete", component: ProfileComplete },
  { path: "profile", component: FreelancerProfile },
  { path: "explore", component: JobsList },
  { path: "explore/:id", component: Details },
  { path: "explore/:id/apply", component: Apply },
  { path: "notification", component: Notification },
  { path: "financial-overview", component: OverviewFreelancer },
  { path: "flexpools", component: Flexpools },
  { path: "flexpools/id", component: FlexpoolsDetails },
  { path: "substitute", component: Substitute1 },
  { path: "substitute1", component: Substitute2 },
  { path: "checkout-1", component: CheckoutStep1 },
  { path: "checkout-2", component: CheckoutStep2 },
  { path: "checkout-3", component: CheckoutStep3 },
  { path: "complete-checkout", component: Complete },
  { path: "explore/id/negotiate", component: Negotiate },
  { path: "shift/id/cancel", component: CancleJob },
  { path: "did-you-work", component: DidYourWork },
  { path: "explore/:id/applied", component: Applied },
]

function Index() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* public Routes */}
          <Route path="/" element={<FrontendLayouts />}>
            {/* public */}
            <Route index element={<Home />} />
            <Route path="employers" element={<ForEmployers />} />
            <Route path="ourstory" element={<Ourstory />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="termsofue" element={<TermsOfUse />} />
            {/* auth */}
            <Route path="company-signin" element={<CompanyLogin />} />
            <Route path="company-signup" element={<CompanyRegister />} />
            <Route path="freeflexer-signin" element={<FreeflexerLogin />} />
            <Route path="freeflexer-signup" element={<FreeflexerRegister />} />
            <Route
              path="login-without-password"
              element={<LoginWithoutPassword />}
            />
            <Route path="password-reset" element={<Reset />} />
            {/* jobs */}
            <Route path="jobs" element={<JobsList />} />
            <Route path="job-details" element={<Details />} />
            {/* settings */}
          </Route>
          {/* freeFlexer */}
          {/* <Route path="freelancer" element={<FreelancerLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile-complete" element={<ProfileComplete />} />
            <Route path="profile" element={<FreelancerProfile />} />
            <Route path="explore" element={<JobsList />} />
            <Route path="explore/id" element={<Details />} />
            <Route path="explore/id/apply" element={<Apply />} />
            <Route path="notification" element={<Notification />} />

            <Route path='dashboard' element={<Dashboard />} />
            <Route path='old-dashboard' element={<OldDashboard />} />
            <Route path='profile-complete' element={<ProfileComplete />} />
            <Route path='profile' element={<FreelancerProfile />} />
            <Route path='explore' element={<JobsList />} />
            <Route path='explore/id' element={<Details />} />
            <Route path='explore/id/apply' element={<Apply />} />
            <Route path='explore/id/applied' element={<Applied />} />
            <Route path="explore/id/negotiate" element={<Negotiate />} />
            <Route path="shift/id/cancel" element={<CancleJob />} />
            <Route path="did-you-work" element={<DidYourWork />} />
            <Route path='notification' element={<Notification />} />

            <Route path="financial-overview" element={<OverviewFreelancer />} />
            <Route path="flexpools" element={<Flexpools />} />
            <Route path="flexpools/id" element={<FlexpoolsDetails />} />
            <Route path="substitute" element={<Substitute1 />} />
            <Route path="substitute1" element={<Substitute2 />} />
            <Route path="complete-checkout" element={<Complete />} />
            <Route path="checkout-1" element={<CheckoutStep1 />} />
            <Route path="checkout-2" element={<CheckoutStep2 />} />
            <Route path="checkout-3" element={<CheckoutStep3 />} />
          </Route> */}

          {/* Freelancer */}
          {
            FreelancerRoutes.map(({ path, component }) => (
              <Route path="freelancer" element={<FreelancerLayout />}>
                <Route key={path} path={path} element={<ProtectedFreelancerRoute Component={component} />} />
              </Route>
            ))
          }

          {/* Employer */}
          <Route path="employer" element={<EmployerLayouts />}>
            <Route path="agreement" element={<Step1 />} />
            <Route path="phonenumber" element={<Step2 />} />
            <Route path="company_details" element={<Step3 />} />
            <Route path="panding-checkouts" element={<PendingCheckout />} />
            <Route path="jobs" element={<JobsList />} />
            <Route path="job-details" element={<Details />} />
            {/* freeFlexer */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile-complete" element={<ProfileComplete />} />
            <Route path="financial-overview" element={<OverviewEmployer />} />
            <Route path="profile" element={<FreelancerProfile />} />
            {/* settings */}
          </Route>
          {/* Employer */}
          <Route path="employer" element={<EmployerLayouts />}>
            <Route path="agreement" element={<Step1 />} />
            <Route path="phonenumber" element={<Step2 />} />
            <Route path="company_details" element={<Step3 />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="dashboard" element={<EmployerLayouts />}>
            <Route path="profile" element={<EmployerProfile />} />
            <Route path="client" element={<Company />} />
          </Route>
          <Route path="clients" element={<EmployerLayouts />}>
            <Route path="projects" element={<Projects />} />
            <Route path="project/id" element={<ProjectDetails />}/>
            <Route path="project/id/jobs/add" element={<Add />} />
            <Route path="project/id/shift/add" element={<AddShift />} />
            <Route path="project/id/job/:id" element={<ClientJobDetail />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>

          {/* admin Routes */}
          <Route path="admin" element={<AdminLayouts />}>
            <Route index element={<AdminDashboard />} />
            <Route path="freelancers" element={<Freelancers />} />
            <Route path="employers" element={<Employers />} />
            <Route path="employerinvoices" element={<EmployerInvoices />} />
            <Route path="freelancerpayout" element={<FreelancerPayout />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="emaillogs" element={<EmailLogs />} />
            <Route path="emailtemplates" element={<EmailTemplates />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/add" element={<AddCategories />} />
            <Route path="emailtemplates/add" element={<AddEmailTemplate />} />
            <Route path="subcategories" element={<SubCategories />} />
            <Route path="rolemanagement" element={<RoleManagement />} />
            <Route path="rolemanagement/add" element={<AddRoleManagement />} />
            <Route path="activitylog" element={<ActivityLog />} />
            <Route path="reports" element={<Reports />} />
            <Route path="employers/details" element={<EmployerDetails />} />
            <Route path="freelancer/details" element={<FreelancerDetails />} />
          </Route>
          <Route path="*" element={<Error type="404" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


const ProtectedFreelancerRoute = ({ Component }) => (
  <ProtectedFreelancer>
    <Component />
  </ProtectedFreelancer>
);

export default Index;
