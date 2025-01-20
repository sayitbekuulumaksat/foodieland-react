import "./navbar.scss";
import Logo from "../../assets/images/header/Foodieland.logo.svg";
import FacebookIcon from "../../assets/images/header/facebook.icon.svg";
import TwitterIcon from "../../assets/images/header/twitter.icon.svg";
import InstagramIcon from "../../assets/images/header/instagram.icon.svg";

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
      </div>
      <hr className='header__hr' />
    </div>
  );
}

export default Navbar;
