import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        {/* <NavLink to="/" className="link">
          Create
        </NavLink> */}
        <button className="auth">
          <i className="bi bi-google"></i> Login
        </button>
        {/* <button className="auth">
          <i className="bi bi-box-arrow-right"></i> Logout
        </button> */}
      </nav>
    </header>
  );
};
