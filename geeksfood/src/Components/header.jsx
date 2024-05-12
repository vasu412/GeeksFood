import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <span>Geeks FOOD</span>
      </div>
      <div className="items">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/quote">
          <span>Quotes</span>
        </Link>
        <span>Restaurants</span>
        <span>Foods</span>
        <span>Contacts</span>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
