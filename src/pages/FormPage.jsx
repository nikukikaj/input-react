import StudentForm from "../components/StudentForm";
import StudentsTable from "../components/StudentsTable";

const FormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-white p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🎓 Student Manager
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Add New Student
          </h2>
          <StudentForm />
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Student List
          </h2>
          <StudentsTable />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
