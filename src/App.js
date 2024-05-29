import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import OTPPage from './Components/Otp';
import Sidebar from './Components/Sidebar';
import RegistrationForm from './Components/Registor';
import Home from './Components/Home';
import Members from './Components/Members';
import District from './Components/Utility/District';
import Taluka from './Components/Utility/Taluka';
import Village from './Components/Utility/Village';
import Education from './Components/Utility/Education';
import Relation from './Components/Utility/Relation';
import BloodGroup from './Components/Utility/BloodGroup';
import Occupation from './Components/Utility/Occupation';
import Commitee from './Components/Utility/Commitee';
import CommiteeMembers from './Components/CommiteeMembers';
import Navbar from './Components/Navbar';

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(true);

  return (
    <div className={`app-container ${sidebarOpen ? '' : 'sidebar-closed'}`}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="content-container">
        <Navbar open={sidebarOpen} visible={navbarVisible} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<RegistrationForm />} />
        <Route exact path='/otp' element={<OTPPage />} />
        
        {/* Use AppLayout for routes that should display the sidebar and navbar */}
        <Route exact path='/home' element={<AppLayout><Home/></AppLayout>} />
        <Route exact path='/members' element={<AppLayout><Members /></AppLayout>} />
        <Route exact path='/district' element={<AppLayout><District/></AppLayout>} />
        <Route exact path='/taluka' element={<AppLayout><Taluka /></AppLayout>} />
        <Route exact path='/village' element={<AppLayout><Village /></AppLayout>} />
        <Route exact path='/education' element={<AppLayout><Education /></AppLayout>} />
        <Route exact path='/relation' element={<AppLayout><Relation /></AppLayout>} />
        <Route exact path='/bloodGroup' element={<AppLayout><BloodGroup /></AppLayout>} />
        <Route exact path='/occupation' element={<AppLayout><Occupation /></AppLayout>} />
        <Route exact path='/commitee' element={<AppLayout><Commitee /></AppLayout>} />
        <Route exact path='/commitee-members' element={<AppLayout><CommiteeMembers /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
