import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <h1 className="text-2xl font-bold mb-3">User Details</h1>
        <p className="text-lg mb-4">User ID: <span className="font-semibold">{id}</span></p>

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

export default UserDetails;
