import { useState } from "react";

export default function Mood() {
  const [mood, setMood] = useState("Happy 😃");

  const toggleMood = () => {
    setMood((prev) => (prev === "Happy 😃" ? "Sad 😞" : "Happy 😃"));
  };

  const name = "Darling";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Hello, {name}!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Mood: <span className="font-medium">{mood}</span>
        </p>
        <button
          onClick={toggleMood}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-xl"
        >
          Change Mood
        </button>
      </div>
    </div>
  );
}
