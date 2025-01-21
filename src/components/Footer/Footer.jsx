import "./footer.scss"
import Logo from "../../assets/images/header/Foodieland.logo.svg";
import FacebookIcon from "../../assets/images/header/facebook.icon.svg";
import TwitterIcon from "../../assets/images/header/twitter.icon.svg";
import InstagramIcon from "../../assets/images/header/instagram.icon.svg";

function Footer() {
  const menuData = [
    { name: "Home", src: "/" },
    { name: "Recipes", src: "recipes" },
    { name: "Blog", src: "blog" },
    { name: "Contact", src: "contact" },
    { name: "About us", src: "about" },
  ];
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
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__block'>
            <a href='/' className='footer__logo'>
              <img className='footer__logo_img' src={Logo} alt='logo' />
            </a>
            <p className=' footer__description'>
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <ul className='footer__nav'>
            {menuData.map((menu, index) => (
              <li className='footer__item' key={index}>
                <a href={menu.src} className='footer__link'>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className='footer__hr' />
        <div className='footer__copytext'>
          &copy; 2020 Flowbase. Powered by Webflow
            <div  className='footer__socials'>
          {socialsData.map((social, i) => (
              <img key={i} className='footer__icon' src={social.src} alt={social.alt} />
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
