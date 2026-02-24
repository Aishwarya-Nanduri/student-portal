import React from "react";

function StudentDetails({ student }) {

  if (!student) {
    return <div className="content-card">No student data available</div>;
  }

  return (
    <div className="content-card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll Number:</strong> {student.roll}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Year:</strong> {student.year}</p>
    </div>
  );
}

export default StudentDetails;