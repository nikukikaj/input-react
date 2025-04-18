import { useState } from "react";
import { useStudentContext } from "../context/StudentContext";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const { addStudent } = useStudentContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.age) return;
    addStudent(formData);
    setFormData({ firstName: "", lastName: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-gray-600">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-600">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-600">Age</label>
        <input
          name="age"
          type="number"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
