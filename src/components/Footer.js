import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <p>Copytright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
