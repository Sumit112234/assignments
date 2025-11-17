

export default function Footer({ socialLinks, year }) {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-3">© {year} My Portfolio. All rights reserved.</p>
        <div className="space-x-4">
          {socialLinks.map((link, index) => (
            <button key={index} className="hover:text-blue-400 transition">
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
