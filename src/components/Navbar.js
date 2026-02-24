import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/details">Student Details</Link>
      <Link to="/marks">Marks</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/">Logout</Link>
    </div>
  );
}

export default Navbar;