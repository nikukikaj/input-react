import StudentsTable from "../components/StudentsTable";

const StudentsTablePage = () => {
  const students = [
    { firstName: "John", lastName: "Doe", age: 21 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <StudentsTable students={students} />
    </div>
  );
};

export default StudentsTablePage;
