import { useState } from "react";
import { toast } from "react-toastify";

function StudentForm({ setStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    gpa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.major.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const gpaValue = parseFloat(formData.gpa);
    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
      toast.error("GPA must be between 0 and 4");
      return;
    }

    console.log(formData);
    setStudent(formData);

    toast.success("Student Registered Successfully!");

    setFormData({
      name: "",
      email: "",
      major: "",
      gpa: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="major"
        placeholder="Major"
        value={formData.major}
        onChange={handleChange}
      />

      <input
        name="gpa"
        type="number"
        step="0.1"
        placeholder="GPA (0 - 4)"
        value={formData.gpa}
        onChange={handleChange}
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
