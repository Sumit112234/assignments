import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.dispatchEvent(new CustomEvent('navigate', { detail: '/' }));
    }
  }, [countdown]);

  return (
    <div className="max-w-6xl mx-auto p-8 text-center py-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Page not found</p>
      <p className="text-gray-500">Redirecting to home in {countdown} seconds...</p>
      <Link to="/">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Go Home Now
        </button>
      </Link>
    </div>
  );
}
