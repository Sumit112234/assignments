import { useState } from "react";

export default function TeamFeedbackBoard() {
  const team = [
    { id: 1, name: "Thor" },
    { id: 2, name: "Natasha" },
    { id: 3, name: "Captain" },
    { id: 4, name: "Hulk" },
  ];

  const [feedback, setFeedback] = useState(
    team.map(() => 0)
  );

  const increaseFeedback = (index) => {
    const updated = [...feedback];
    updated[index] += 1;
    setFeedback(updated);
  };

  const resetAll = () => setFeedback(team.map(() => 0));

  return (
    <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        🧠 Team Feedback Board
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div
            key={member.id}
            className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-2xl shadow-md flex flex-col items-center justify-between"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {member.name}
            </h2>
            <p className="text-gray-600 mb-4">
              Feedback: <span className="font-bold text-gray-800">{feedback[i]}</span>
            </p>
            <button
              onClick={() => increaseFeedback(i)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Give Feedback
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={resetAll}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
