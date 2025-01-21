import "./checkOutInstagram.scss";
import SvgInsta from "../../assets/images/checkInstagram/instagramW.svg";
import screenA from "../../assets/images/checkInstagram/Post.png";
import screenB from "../../assets/images/checkInstagram/Post(1).png";
import screenC from "../../assets/images/checkInstagram/Post(2).png";
import screenD from "../../assets/images/checkInstagram/Post.png";

function CheckOutInstagram() {
  const instagramData = [
    {
      screen: screenA,
    },
    {
      screen: screenB,
    },
    {
      screen: screenC,
    },
    {
      screen: screenD,
    },
  ];

  return (
    <section className='instagram'>
      <div className='container'>
        <div className='instagram__content'>
          <h2 className='instagram__title'>
            Check out @foodieland on Instagram
          </h2>
          <p className='instagram__description'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className='instagram__photos'>
            {instagramData.map((screenPhoto, index) => (
              <img
                key={index}
                src={screenPhoto.screen}
                alt='insta-photo'
                class='instagram__photos_item '
              />
            ))}
          </div>
          <div className='instagram__btn'>
            <a href='/' className='instagram__btn--text'>
              Visit Our Instagram
            </a>
            <img src={SvgInsta} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOutInstagram;
