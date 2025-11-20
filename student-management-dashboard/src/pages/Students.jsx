import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StudentCard from "../components/StudentCard";
import { addFavorite } from "../redux/favoritesSlice";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setStatus("loading");
        setError(null);
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch students");
        }

        // console.log("Fetch response:", res);
        const data = await res.json();
        setStudents(data.users || []);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    };

    fetchStudents();
  }, []);

  const handleAddFavorite = (student) => {
    dispatch(addFavorite(student));
  };

  if (status === "loading") {
    return <p className="text-center">Loading students...</p>;
  }

  if (status === "error") {
    return (
      <div className="text-center text-red-600">
        <p>Something went wrong: {error}</p>
      </div>
    );
  }

  if (status === "success" && students.length === 0) {
    return <p className="text-center">No Students Found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onAddFavorite={handleAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
