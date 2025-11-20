import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student, onAddFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      {student.image && (
        <img
          src={student.image}
          alt={student.firstName}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
      )}
      <h3 className="font-semibold text-lg">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-sm text-gray-600">{student.email}</p>
      <p className="text-xs text-gray-500 mt-1">
        {student.address?.country || student.role}
      </p>
      <div className="mt-3 flex gap-2">
        <Link
          to={`/students/${student.id}`}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Profile
        </Link>
        <button
          onClick={() => onAddFavorite(student)}
          className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
