import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import "./footer.scss";
import Logo from "../../assets/images/header/Foodieland.logo.svg";
function Footer() {
  const menuData = [
    { name: "Home", src: "/" },
    { name: "Recipes", src: "recipes" },
    { name: "Blog", src: "blog" },
    { name: "Contact", src: "contact" },
    { name: "About us", src: "about" },
  ];
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__block'>
            <Link to='/' className='footer__logo'>
              <img className='footer__logo_img' src={Logo} alt='logo' />
            </Link>
            <p className=' footer__description'>
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <ul className='footer__nav'>
            {menuData.map((menu, index) => (
              <li className='footer__item' key={index}>
                <NavLink to={menu.src} className='footer__link'>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className='footer__hr' />
        <div className='footer__copytext'>
          &copy; 2020 Flowbase. Powered by Webflow
          <div className='footer__social'>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF className='footer__social_icon' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaTelegramPlane className='footer__social_icon' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='footer__social_icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
