import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import UserDetails from "./UserDetails";
import Settings from "./Settings";
import Profile from "./Profile";
import Dashboard from "./Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      
      <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/settings" element={<Settings />} />

      
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
