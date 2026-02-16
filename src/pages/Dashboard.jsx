import { useState } from "react";
import { ToastContainer } from "react-toastify";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import StudentModal from "../components/StudentModal";
import useLocalStorage from "../hooks/useLocalStorage";
import "react-toastify/dist/ReactToastify.css";
import "../styles/styles.css";

function Dashboard() {
  const [students, setStudents] = useLocalStorage("students", []);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState("");
  const [filterMajor, setFilterMajor] = useState("");

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesMajor = filterMajor
      ? student.major.toLowerCase().includes(filterMajor.toLowerCase())
      : true;

    return matchesSearch && matchesMajor;
  });

  return (
    <div className="container">
      <h1>Student Dashboard</h1>

      <StudentForm setStudent={addStudent} />
      <div className="filters">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          placeholder="Filter by major..."
          value={filterMajor}
          onChange={(e) => setFilterMajor(e.target.value)}
        />
      </div>
      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
        onSelect={setSelectedStudent}
      />

      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
