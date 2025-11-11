import { useState } from "react";
import Mood from "./mood app/mood";
import TeamFeedbackBoard from "./team-feedback-board/TeamFeedbackBoard";
import WeatherDashboard from "./weather-app/WeatherDashboard";
import UserManagement from "./user-management/UserManagement";

export default function App() {
  
  return (
   <>
    {/* mood app 10-nov */}
    {/* <Mood/> */}

    {/* team feedback board 10-nov */} 
    {/* <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center">
      <TeamFeedbackBoard />
    </div> */}
    
    {/* weather app 11-nov */}
    {/* <WeatherDashboard/> */}

    {/* user Management System 11-nov */}
    <UserManagement/>

   </>
  );
}
