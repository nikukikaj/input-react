import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { firstName: "John", lastName: "Doe", age: 21 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
