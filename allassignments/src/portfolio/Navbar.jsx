import { Link } from "react-router-dom";


function Navbar({ siteName, links }) {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{siteName}</h1>
        <div className="space-x-6">
          {links.map((link, index) => (
            <Link 
              key={index}
              to={link.path}
              className="hover:text-blue-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
