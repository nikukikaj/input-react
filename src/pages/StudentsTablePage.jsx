import StudentsTable from "../components/StudentsTable";

const StudentsTablePage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <StudentsTable />
    </div>
  );
};

export default StudentsTablePage;
