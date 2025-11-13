import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <Link
          to="/dashboard/profile"
          className="p-4 bg-white shadow rounded-lg hover:bg-gray-200 transition"
        >
          Go to Profile
        </Link>

        <Link
          to="/dashboard/settings"
          className="p-4 bg-white shadow rounded-lg hover:bg-gray-200 transition"
        >
          Go to Settings
        </Link>

        <Link
          to="/user/10"
          className="p-4 bg-blue-600 text-white shadow rounded-lg hover:bg-blue-700 transition"
        >
          View User ID 10
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
