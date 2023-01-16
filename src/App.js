import { React } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import paths from './paths.json';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Authentication
import SignIn from './pages/authentication/signin/SignIn';
import SignOut from './pages/authentication/signout/SignOut';

// Main Page
import Home from './pages/main/home/Home';
import Sponsors from './pages/main/sponsors/Sponsors';
import About from './pages/main/about/About';
import First from './pages/main/first/First';
import Outreach from './pages/main/outreach/Outreach';

// Recon
import Dashboard from './pages/recon/dashboard/Dashboard';
import Scout from './pages/recon/scout/Scout';
import MasterTable from './pages/recon/master-table/MasterTable';
import Teams from './pages/recon/teams/Teams';

// Reflect
import Reflect from './pages/reflect/home/Reflect'
import Record from './pages/reflect/record/Record'
import Legacy from './pages/reflect/legacy/Legacy'
import Daily from './pages/reflect/daily/Daily'
import DailyEntry from './pages/reflect/daily/dailyEntry/DailyEntry';
import DailyEntryForm from './pages/reflect/daily/dailyEntryForm/DailyEntryForm';

function App() {
  return (
    <>
      {window.location.pathname.includes("/reflect") ? <Navbar type='reflect' /> : 
      window.location.pathname.includes("recon") ? <Navbar type='recon' /> : <Navbar />}
      <BrowserRouter>
        <Routes>
          {/* Authentication */}
          <Route path={paths.authentication['signin']} element={<SignIn />} />
          <Route path={paths.authentication['signout']} element={<SignOut />} />
          {/* Main Page */}
          <Route index element={<Home />} />
          <Route path={paths.main['sponsors']} element={<Sponsors />} />
          <Route path={paths.main['about']} element={<About />} />
          <Route path={paths.main['first']} element={<First />} />
          <Route path={paths.main.pillars['reach']} element={<Outreach />} />
          {/* Recon */}
          <Route path={paths.recon['dashboard']} element={<Dashboard />} />
          <Route path={paths.recon['scout']} element={<Scout />} />
          <Route path={paths.recon['master-table']} element={<MasterTable />} />
          <Route path={paths.recon['team-stats']} element={<Teams />} />
          {/* Reflect */}
          <Route path={paths.reflect['home']} element={<Reflect />} />
          <Route path={paths.reflect['record']} element={<Record />} />
          <Route path={paths.reflect['legacy']} element={<Legacy />} />
          <Route path={paths.reflect['daily']} element={<Daily />} />
          <Route path={paths.reflect['daily-entry']} element={<DailyEntry />} />
          <Route path={paths.reflect['daily-entry-form']} element={<DailyEntryForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}


export default App;
