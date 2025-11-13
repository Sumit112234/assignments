import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Profile;
