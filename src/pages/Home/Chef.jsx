import "./chef.scss";
import chefImg from "../../assets/images/recipes/chefWithF.png"

function Chef() {
  return (
    <section className='chef'>
      <div className='container'>
        <div className='chef__content'>
          <div className='chef__info'>
            <h2 className='chef__title'>
              Everyone can be a chef in their own kitchen
            </h2>
            <p className='chef__description'>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <button className='chef__btn'>Learn More</button>
          </div>
          <img src={chefImg} alt='' className='chef__img' />
        </div>
      </div>
    </section>
  );
}

export default Chef;
