
import './App.css';
import Landing from './pages/landingpage/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/authpage/Auth';
import Career from './pages/careerpage/Career';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>  </Route>
        <Route path="/authUser" element={<Auth admin={false}/>}> </Route>
        <Route path="/authAdmin" element={<Auth admin={true}/>}> </Route>
        <Route path="/career" element={<Career />}> </Route>
        <Route path="/adminDashboard" element={<AdminDashboard />}> </Route>
        <Route path="/userDashboard" element={<UserDashboard />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
