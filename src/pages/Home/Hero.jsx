import "./hero.scss";
import { FaX } from "react-icons/fa6";
import badgeIcon from "../../assets/images/hero/Badge.svg";
import playCircle from "../../assets/images/hero/PlayCircle.svg";
import hotRecipesIcon from "../../assets/images/hero/hotRecipesIcon.svg";
import { useContext } from "react";
import RecipesContext from "../../context/RecipesContext";
import { useState } from "react";

function Hero() {
  const recipesData = useContext(RecipesContext);
  if (!recipesData || recipesData.length === 0) {
    return <p>Data is not available</p>;
  }
  const recipe = recipesData[0];
  console.log(recipe)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='hero'>
      <div className='container'>
        {show ? (
          <div className='modal__block'>
            <FaX className='modal__block_close' onClick={handleClose} />
            <iframe
              className='modal__block_video'
              src={recipe.video}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        ) : (
          ""
        )}
        <div className='hero__content'>
          <div className='hero__block hero__block_left'>
            <div className='hero__name'>
              <img
                src={hotRecipesIcon}
                alt='Hot Recipes Icon'
                className='hero__icon'
              />
              <p className='hero__name--text'>Hot Recipes</p>
            </div>
            <h1 className='hero__title'>{recipe.title}</h1>
            <p className='hero__description'>{recipe.description}</p>
            <div className='hero__links'>
              <a href='/' className='hero__link'>
                <img
                  src={recipe.iconTime}
                  alt='Time icon'
                  className='hero__link--icon'
                />
                <p className='hero__link--text'>30 Minutes</p>
              </a>
              <a href='/' className='hero__link'>
                <img
                  src={recipe.iconKnife}
                  alt='Knife icon'
                  className='hero__link--icon'
                />
                <p className='hero__link--text'>{recipe.type}</p>
              </a>
            </div>
            <div className='hero__chef'>
              <div className='hero__chef_profile'>
                <img
                  src={recipe.author.photo}
                  alt='Author'
                  className='hero__chef--photo'
                />
                <p className='hero__chef_info'>
                  {recipe.author.name}
                  <span className='hero__chef_name'>{recipe.author.date}</span>
                </p>
              </div>
              <button className='hero__button' onClick={handleShow}>
                <p className='hero__button--text'>View Recipes</p>
                <img
                  className='hero__button_icon'
                  src={playCircle}
                  alt='Play button'
                />
              </button>
            </div>
          </div>
          <div className='hero__block hero__block_right'>
            <img className='hero__badge' src={badgeIcon} alt='Badge' />
            <img
              className='hero__maskpng'
              src={recipe.image}
              alt='Mask Group'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
