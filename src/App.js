import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudentDetails from "./components/StudentDetails";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";

function App() {

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Store logged in student data
  const [studentData, setStudentData] = useState(null);

  // Control sidebar navigation
  const [activeComponent, setActiveComponent] = useState("dashboard");


  // Render correct component
  const renderComponent = () => {

    if (activeComponent === "details") {
      return <StudentDetails student={studentData} />;
    }

    if (activeComponent === "marks") {
      return <Marks />;
    }

    if (activeComponent === "attendance") {
      return <Attendance />;
    }

    return <Dashboard student={studentData} />;
  };


  // If not logged in → show login page
  if (!isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setStudentData={setStudentData}
      />
    );
  }


  return (
    <div className="main-container">

      {/* Sidebar */}
      <div className="sidebar">

        <h2>Student Portal</h2>

        <button onClick={() => setActiveComponent("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setActiveComponent("details")}>
          Student Details
        </button>

        <button onClick={() => setActiveComponent("marks")}>
          Marks
        </button>

        <button onClick={() => setActiveComponent("attendance")}>
          Attendance
        </button>

        <button
          className="logout-btn"
          onClick={() => {
            setIsLoggedIn(false);
            setStudentData(null);
            setActiveComponent("dashboard");
          }}
        >
          Logout
        </button>

      </div>

      {/* Content Area */}
      <div className="content">
        {renderComponent()}
      </div>

    </div>
  );
}

export default App;