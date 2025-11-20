import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-lg p-8 sm:p-10 border border-blue-100">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left section: heading + text */}
        <div className="max-w-xl">
          <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full">
            Student Management Dashboard
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            About This Project
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            The Student Management Dashboard is a modern React application that
            showcases clean routing, API integration, global state management,
            and responsive UI components tailored for managing student-like data.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It fetches user data from a public DummyJSON API, treats it as
            student profiles, and allows you to browse details, curate a list of
            favorite students using Redux Toolkit, and explore a polished
            dashboard experience built with Tailwind CSS.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-blue-100 text-blue-700">
              React & React Router
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-purple-100 text-purple-700">
              Redux Toolkit
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-emerald-100 text-emerald-700">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-amber-100 text-amber-700">
              DummyJSON API
            </span>
          </div>
        </div>

        {/* Right section: stats / highlights */}
        <div className="w-full max-w-xs md:max-w-sm">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Key Capabilities
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-gray-600">Live student data</dt>
                <dd className="font-semibold text-gray-900 text-right">
                  DummyJSON users API
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-gray-600">Favorite management</dt>
                <dd className="font-semibold text-gray-900 text-right">
                  Redux Toolkit slice
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-gray-600">Views</dt>
                <dd className="font-semibold text-gray-900 text-right">
                  Home · Students · Details · Favorites · About
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-gray-600">UX features</dt>
                <dd className="font-semibold text-gray-900 text-right">
                  Loading & error states, theme toggle, clean cards
                </dd>
              </div>
            </dl>

            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">
                Ideal as a learning project to practice core React concepts,
                including hooks, conditional rendering, global state, and
                consuming real-world-style API responses in a dashboard layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
