import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import "./navbar.scss";
import Logo from "../../assets/images/header/Foodieland.logo.svg";

function Navbar() {
  const menuData = [
    { name: "Home", src: "/foodieland-react/" },
    { name: "Recipes", src: "/foodieland-react/recipes" },
    { name: "Blog", src: "/foodieland-react/blog" },
    { name: "Contact", src: "/foodieland-react/contact" },
    { name: "About us", src: "/foodieland-react/about" },
  ];
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <Link to='/' className='header__logo'>
            <img className='header__logo_img' src={Logo} alt='logo' />
          </Link>
          <ul className='header__nav'>
            {menuData.map((menu, index) => (
              <li key={index} className='header__item'>
                <NavLink to={menu.src} className='header__link'>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='header__social'>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF className='header__social_icon' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaTelegramPlane className='header__social_icon' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='header__social_icon' />
            </a>
          </div>
        </div>
      </div>
      <hr className='header__hr' />
    </div>
  );
}

export default Navbar;
