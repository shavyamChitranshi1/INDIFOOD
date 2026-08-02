import "../styles/navbar.css";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <span>🍽</span>
        <h2>Cravely</h2>
      </div>

      <div className="search-bar">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="What are you craving today?"
        />

      </div>

      <nav>

        <ul className="nav-links">

          <li>Home</li>

          <li>Discover</li>

          <li>Categories</li>

          <li>Trending</li>

          <li>About</li>

        </ul>

      </nav>

    </header>
  );
}