import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#ddd" }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/projects" style={{ marginRight: 20 }}>Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
