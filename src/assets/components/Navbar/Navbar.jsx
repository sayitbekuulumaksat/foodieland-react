import "./navbar.scss";
import Logo from "../../images/header/Foodieland.logo.svg";
import FacebookIcon from "../../images/header/facebook.icon.svg";
import TwitterIcon from "../../images/header/twitter.icon.svg";
import InstagramIcon from "../../images/header/instagram.icon.svg";

function Navbar() {
  const socialsData = [
    {
      src: FacebookIcon,
      alt: "facebook.icon",
    },
    {
      src: TwitterIcon,
      alt: "twitter.icon",
    },
    {
      src: InstagramIcon,
      alt: "instagram.icon",
    },
  ];
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <a href='/' className='header__logo'>
            <img className='header__logo_img' src={Logo} alt='logo' />
          </a>
          <ul className='header__nav'>
            {["Home", "Recipes", "Blog", "Contact", "About us"].map((item) => (
              <li key={item} className='header__item'>
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className='header__link'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className='header__socials'>
            {socialsData.map((item, i) => (
              <img
                key={i}
                className='header__icon'
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
        <hr className='header__hr' />
      </div>
    </div>
  );
}

export default Navbar;
