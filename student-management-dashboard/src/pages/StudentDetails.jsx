import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [student, setStudent] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setStatus("loading");
        setError(null);
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch student");
        }
        const data = await res.json();
        setStudent(data);
        setStatus("success");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    };

    fetchStudent();
  }, [id]);

  const handleAddFavorite = () => {
    if (student) {
      dispatch(addFavorite(student));
    }
  };

  if (status === "loading") {
    return <p className="text-center">Loading student details...</p>;
  }

  if (status === "error") {
    return (
      <div className="text-center text-red-600">
        <p>Something went wrong: {error}</p>
      </div>
    );
  }

  if (!student) {
    return <p className="text-center">No Student Found.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        {student.image && (
          <img
            src={student.image}
            alt={student.firstName}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-2xl font-semibold">
            {student.firstName} {student.lastName}
          </h2>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-sm text-gray-500 mt-1">
            Age: {student.age} | Role: {student.role}
          </p>
        </div>
      </div>

      <div className="space-y-1 text-sm text-gray-700">
        <p>
          Address:{" "}
          {student.address &&
            `${student.address.address}, ${student.address.city}, ${student.address.country}`}
        </p>
        <p>Phone: {student.phone}</p>
        <p>University: {student.university}</p>
        <p>Company: {student.company?.name}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleAddFavorite}
          className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Add to Favorites
        </button>
        <button
          onClick={() => navigate("/students")}
          className="px-4 py-2 rounded border border-gray-300 text-sm hover:bg-gray-50"
        >
          Back to Students
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
