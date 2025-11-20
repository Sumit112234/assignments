import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, clearFavorites } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  if (favorites.length === 0) {
    return <p className="text-center">No favorite students yet.</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Favorite Students</h2>
        <button
          onClick={() => dispatch(clearFavorites())}
          className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
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
            <div className="mt-3 flex gap-2">
              <Link
                to={`/students/${student.id}`}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Profile
              </Link>
              <button
                onClick={() => dispatch(removeFavorite(student.id))}
                className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
