import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MyStore
      </div>

      <div className="search">

        <input
          type="text"
          placeholder="Search Products..."
        />

      </div>

      <ul className="nav-links">

        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>

      </ul>

    </nav>
  );
}

export default Navbar;