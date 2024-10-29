
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from '../src/Pages/Landingpage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/changepassword/:email" element={<ChangePassword />} /> */}

          {/* <Route path="/usermgmt" element={<UserMgmt />} /> */}

          {/* <Route path="/usermgmt/wyseradmins/" element={<UserMgmt />} />
          <Route path="/usermgmt/wyseradmins/adduser" element={<AddEditUser pageHeader={"New User"} /> } />
          <Route path="/usermgmt/wyseradmins/edituser/:id" element={<AddEditUser pageHeader={"Edit User"}/>} />

          <Route path="/usermgmt/sherpas" element={<Sherpas />} />
          <Route path="/usermgmt/sherpas/addEditSherpa" element={<AddEditSherpa pageHeader={"New Sherpa"} />} />
          <Route path="/usermgmt/sherpas/editSherpa/:id" element={<AddEditSherpa pageHeader={"Edit Sherpa"}/>} />

          <Route path="/usermgmt/mentors" element={<Mentors />} />
          <Route path="/usermgmt/mentors/addEditMentor/" element={<AddEditMentors pageHeader={"New Mentor"}/>} />
          <Route path="/usermgmt/mentors/editMentor/:id" element={<AddEditMentors pageHeader={"Edit Mentor"}/>} /> */}

          {/* <Route path="/usermgmt/experts" element={<Experts />} />
          <Route path="/usermgmt/experts/addEditExpert/" element={<AddEditExperts pageHeader={"New Expert"}/>} />
          <Route path="/usermgmt/experts/editExpert/:id" element={<AddEditExperts pageHeader={"Edit Expert"}/>} />
          
          <Route path="/cohort" element={<Cohort />} />
          <Route path="/cohort/newcohort/" element={<AddEditCohort pageHeader={"New Cohort"} />} />
          <Route path="/cohort/editcohort/:id" element={<AddEditCohort pageHeader={"Edit Cohort"} />} />
          <Route path="/cohort/details/:id" element={<ViewCohort pageHeader={"Cohort Details"} />} />
          <Route path="/cohort/managecohorts" element={<ManageCohort pageHeader={"Cohort List"}/>}/>
          <Route path="/cohort/managestartups" element={<ManageStartup/>}/>
          {/* <Route path="/cohort/managestream"  element={<ManageCohort/>}/> */}
          {/* <Route path="/cohort/manageform"   element={<ManageForm/>}/>
          <Route path="/cohort/managestream" element={<StreamManagement />} />
          <Route path="/cohort/newstream" element={<NewStream />} />
          <Route path="/cohort/managecohorts/details" element={<ViewPage pageHeader={"Innovation Incubator"} />}/>
          <Route path="/cohort/managecohorts/carddetails" element={<CardDetails/>}/>
          <Route path="/cohort/managecohorts/newcohorttemplate" element={<NewCohortTemplate pageHeader={"New Cohort"} />}/> */}
          {/* <Route path="/scheduler" element={<MyScheduler />} /> */}
          {/* <Route path="/fullcalender" element={<FullCalender/>}/>
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/calendar-multi-week-view" element={<MultiWeekCalendarView />} />

          <Route path="/streammgmt/streammaster/" element={<StreamMaster/>}/>
          <Route path="/streammgmt/technologydesign" element={<TechnologyDesign />} />
          <Route path="/streammgmt/techdetails" element={<TechDetails />} />

          <Route path="/sessionmgmt" element={<Session/>}/>
          {/* <Route path="/newsession" element={<Session/>}/> */}
          {/* <Route path="/newsession" element={<NewSession />} />
          <Route path="/sessionmgmt/details" element={<Details />} />
          <Route path="/sessionmgmt/beforedetails" element={<SessionBeforedetails />} />

          <Route path="/calenderview" element={<CalenderView/>}/>

          <Route path="/applicationmgmt/manageform/" element={<ApplicationForms />} />
          <Route path="/applicationmgmt/manageform/addEditfrom" element={<AddEditApplicationForm />} />
          <Route path="/applicationmgmt/manageform/Editfrom/:id" element={<AddEditApplicationForm />} />
          <Route path="/applicationmgmt/manageform/viewfrom/:id" element={<ViewApplicationForm pageHeader={"Form"}/>} /> 
        
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/applicationmgmt/application/" element={<Application />} />
          <Route path="/applicationmgmt/application/view/:id" element={<EditViewApplication />} />
          <Route path="/applicationmgmt/application/edit/:id" element={<EditViewApplication />} />
         
          
          
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />  */}
          
           
          
         
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
