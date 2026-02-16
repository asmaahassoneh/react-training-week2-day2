function StudentModal({ student, onClose }) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2 className="fontGradient">Student Details</h2>
        <p className="fontGradient">
          <strong>Name:</strong> {student.name}
        </p>
        <p className="fontGradient">
          <strong>Email:</strong> {student.email}
        </p>
        <p className="fontGradient">
          <strong>Major:</strong> {student.major}
        </p>
        <p className="fontGradient">
          <strong>GPA:</strong> {student.gpa}
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default StudentModal;
